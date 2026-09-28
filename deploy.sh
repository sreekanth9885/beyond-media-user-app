#!/bin/bash

set -e

echo "======================================="
echo "Starting Beyond Media User App Deployment"
echo "======================================="

cd /docker/beyond-media-user-app

echo "Pulling latest code..."

git pull origin main

echo "Building Docker image..."

docker compose build user

echo "Restarting User App..."

docker compose up -d user

echo "Cleaning unused Docker images..."

docker image prune -f

echo "Cleaning old Docker build cache..."

docker builder prune -af --filter "until=168h"

echo "======================================="
echo "Deployment completed successfully!"
echo "======================================="