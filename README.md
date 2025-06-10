# Sherafy's Payload Stack

> A **no-bullshit**, self-contained Payload CMS + MongoDB setup that **just fucking works**.

This is Sherafy's Payload Stack.
It's designed for people who are tired of dependency hell, broken repos, and reading the goddamn Debian changelog just to launch a web app. You don't need to understand Node, MongoDB, Linux package names, or how Apache reverse proxies work. This shit **just spins up** and works **on any VPS**.

You want a CMS or headless backend? Done. You want to customize it and deploy something useful in minutes, not hours? This is it.

## What's Inside

* **Payload CMS** (Next.js/Node-based)
* **MongoDB 6.0** (runs in its own container)
* **Docker + Docker Compose** powered
* **Next.js** placeholder frontend under `src/`
* Optional: NGINX reverse proxy and SSL setup (if needed)

---

## Prerequisites

* **Docker** and **Docker Compose** if you want to run everything in containers
* **Node.js 18+** with **Yarn** (`corepack` can install it) for local development
* A server or local machine with at least one working brain cell

---

## How to Use This Stack

### 1. Clone the Repo

```bash
git clone https://github.com/sherafyk/sherafy-payload-stack.git
cd sherafy-payload-stack
```

### 2. Install Dependencies

If you're running locally, enable `corepack` so Yarn is available and install the packages. The provided script takes care of it for you:

```bash
./setup.sh
```

You can also do it manually:

```bash
corepack enable
yarn install
```

### 3. Create Your Environment File

```bash
cp .env.example .env
```

Edit `.env` to change the admin email, password, or app name if you want.

The important variables are:

```
PORT=3000                     # Port the app listens on
PAYLOAD_SECRET=your-secret    # Used by Payload for auth tokens
MONGODB_URI=mongodb://mongo:27017/payload
ADMIN_EMAIL=admin@example.com # First admin user (optional)
ADMIN_PASSWORD=supersecret
```

`PAYLOAD_SECRET` and `MONGODB_URI` **must** be set. The admin credentials are used when the Docker image is built but can be left empty for local dev.

### 4. Launch the Stack with Docker

```bash
docker compose up -d
```

MongoDB now exposes port `27018` on the host. If you need to connect to the database directly (e.g. using a GUI), use `mongodb://localhost:27018`.

### 5. (Alternative) Run Locally without Docker

```bash
yarn dev
```

This starts Payload in development mode using the local MongoDB defined in your `.env` file.
Use `yarn build && yarn start` when you're ready for production.

Once everything is running, visit:

```
http://localhost:3000/admin
```

Or whatever IP/domain you're using.

---

## Using the GHCR Image

GitHub Actions automatically builds this repo's Docker image and publishes it to
GitHub Container Registry (GHCR). If you just want to deploy without cloning or
building locally, log in and pull the image:

```bash
# authenticate to GHCR (use a PAT if your registry is private)
echo $CR_PAT | docker login ghcr.io -u <github-username> --password-stdin

# pull the latest build
docker pull ghcr.io/<OWNER>/<REPO>:latest

# run it on any port you like
docker run -d -p 2501:3000 \
  -e PAYLOAD_SECRET=... \
  -e MONGODB_URI=... \
  ghcr.io/<OWNER>/<REPO>:latest
```

Replace the environment variables with the same values you use in `.env`.

---

## Structure

* `Dockerfile`: Builds Payload CMS container
* `docker-compose.yml`: Spins up both Payload and MongoDB
* `.env`: Environment variables
* `payload.config.ts`: Main Payload configuration
* `collections/`: Your content models
* `src/`: Next.js app (minimal placeholder page)
* `server.js`: Express entry that boots Payload

---

## Optional SSL + Domain Setup

If you want to use a real domain with SSL:

* Add NGINX container (optional)
* Or reverse proxy from Apache/NGINX on the host

Don’t want to deal with that? Just run this stack locally or use IP address directly.

---

## TL;DR

This is the last time you:

* Fight with Node versions
* Ask why MongoDB isn’t in the fucking apt repo
* Wonder why Payload is compiling for 20 minutes
* Lose another day trying to launch a CMS

Sherafy's Payload Stack **ends that cycle**.

Use it. Fork it. Copy it. Never suffer again.

---

## License

MIT or whatever. Just don’t pretend you built it from scratch and try to sell it to sad startups.

---

## Credits

Sherafgan Khan + ChatGPT. Made from rage, caffeine, existential depression, and perseverance.
