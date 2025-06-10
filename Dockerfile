# ─────────────────────────────────────────────
# SHERAFY'S PAYLOAD STACK - NO BULLSHIT VERSION
# ─────────────────────────────────────────────

# Start with a Node base image
# Use an LTS version of Node for better compatibility
FROM node:18-slim

# Set working directory inside container
WORKDIR /app

# Install dependencies first for better caching
COPY package.json yarn.lock ./
RUN yarn install --non-interactive && yarn cache clean
ENV NODE_ENV=production
ENV NODE_OPTIONS="--import tsx"

# Copy the rest of the project files
COPY . .

# Build the production bundle
RUN yarn build

# Expose the port used by Payload (Next.js)
EXPOSE 3000

# Start the app in production mode
CMD ["yarn", "start"]
