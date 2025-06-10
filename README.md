# Sherafy's Payload Stack

> A **no-bullshit**, self-contained Payload CMS + MongoDB setup that **just fucking works**.

This is Sherafy's Payload Stack.
It's designed for people who are tired of dependency hell, broken repos, and reading the goddamn Debian changelog just to launch a web app. You don't need to understand Node, MongoDB, Linux package names, or how Apache reverse proxies work. This shit **just spins up** and works **on any VPS**.

You want a CMS or headless backend? Done. You want to customize it and deploy something useful in minutes, not hours? This is it.

## What's Inside

* **Payload CMS** (Next.js/Node-based)
* **MongoDB 6.0** (runs in its own container)
* **Docker + Docker Compose** powered
* Optional: NGINX reverse proxy and SSL setup (if needed)

---

## Prerequisites

* A VPS (any Linux distro with Docker & Docker Compose installed)
* A working brain cell (optional, but helpful)

---

## How to Use This Stack

### 1. Clone the Repo

```bash
git clone https://github.com/sherafyk/sherafy-payload-stack.git
cd sherafy-payload-stack
```

### 2. Install Dependencies (optional)

Run the provided setup script if your environment doesn't already have
the required packages:

```bash
./setup.sh
```

### 3. Create Your Environment File

```bash
cp .env.example .env
```

Edit `.env` to change the admin email, password, or app name if you want.

### 4. Launch the Stack

```bash
docker compose up -d
```

MongoDB now exposes port `27018` on the host. If you need to connect to the
database directly (e.g. using a GUI), use `mongodb://localhost:27018`.

Done.
Visit:

```
http://localhost:3000/admin
```

Or whatever IP/domain you're using.

---

## Using the GHCR Image

GitHub Actions builds this repo's Docker image and publishes it to
GitHub Container Registry (GHCR). If you just want to deploy without building
anything on your server, log in and pull the image:

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
* `.env`: All your dumb config variables
* `payload.config.ts`: Your collections and CMS config go here
* `collections/`: Put your custom content models here

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
