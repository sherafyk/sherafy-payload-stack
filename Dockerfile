# ─────────────────────────────────────────────
# SHERAFY'S PAYLOAD STACK - NO BULLSHIT VERSION
# ─────────────────────────────────────────────

# Start with a Node base image
FROM node:18-slim

# Set working directory inside container
WORKDIR /app

# Install dependencies first for better caching
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Expose the port used by Payload (Next.js)
EXPOSE 3000

# Start the dev server
CMD ["yarn", "dev"]
