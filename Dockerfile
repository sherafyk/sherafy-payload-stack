# ─────────────────────────────────────────────
# SHERAFY'S PAYLOAD STACK - NO BULLSHIT VERSION
# ─────────────────────────────────────────────

# Start with a Node base image
FROM node:20-slim

# Set working directory inside container
WORKDIR /app

# Install dependencies first for better caching
COPY package.json ./
RUN yarn install --non-interactive

# Copy the rest of the project files
COPY . .

# Expose the port used by Payload (Next.js)
EXPOSE 3000

# Start the dev server
CMD ["yarn", "dev"]
