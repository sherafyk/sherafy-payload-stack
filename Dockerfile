# ─────────────────────────────────────────────
# SHERAFY'S PAYLOAD STACK - NO BULLSHIT VERSION
# ─────────────────────────────────────────────

# Start with a Node base image
# Use an LTS version of Node for better compatibility
FROM node:18-slim

# Set working directory inside container
WORKDIR /app

# Allow secrets to be injected at build time
ARG PORT=3000
ARG PAYLOAD_SECRET
ARG MONGODB_URI
ARG ADMIN_EMAIL
ARG ADMIN_PASSWORD

ENV PORT=$PORT \
    PAYLOAD_SECRET=$PAYLOAD_SECRET \
    MONGODB_URI=$MONGODB_URI \
    ADMIN_EMAIL=$ADMIN_EMAIL \
    ADMIN_PASSWORD=$ADMIN_PASSWORD

# Install dependencies first for better caching
COPY package.json yarn.lock ./
# Use npm registry and retry up to 3 times to avoid transient registry errors
RUN for i in 1 2 3; do \
    yarn install --non-interactive --registry=https://registry.npmjs.org && break || sleep 10; \
    done && yarn cache clean
ENV NODE_ENV=production
ENV NODE_OPTIONS="--import tsx"

# Copy the rest of the project files
COPY . .

# Skip building; Payload v3 handles admin bundling on the fly
# RUN yarn build

# Expose the port used by Payload (Next.js)
EXPOSE 3000

# Start the app in production mode
CMD ["yarn", "start"]
