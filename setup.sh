#!/bin/bash
set -e

# Install basic packages
apt-get update && apt-get install -y curl git

# Enable corepack so yarn is available
corepack enable

# Install project dependencies
yarn install
