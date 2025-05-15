#!/bin/bash
set -e

# Install sshpass
sudo apt-get update && sudo apt-get install -y sshpass

# Set repository name
REPO_NAME=$(echo "${{ github.repository }}" | cut -d '/' -f 2 | tr '[:upper:]' '[:lower:]')

# Create project directory on VPS
sshpass -p "$VPS_PASSWORD" ssh -o StrictHostKeyChecking=no $VPS_USER@$VPS_IP "mkdir -p ~/$REPO_NAME"

# Copy files to VPS
sshpass -p "$VPS_PASSWORD" scp -o StrictHostKeyChecking=no docker-compose.yml $VPS_USER@$VPS_IP:~/$REPO_NAME/
sshpass -p "$VPS_PASSWORD" scp -o StrictHostKeyChecking=no .env $VPS_USER@$VPS_IP:~/$REPO_NAME/.env

# Copy deployment script and execute
sshpass -p "$VPS_PASSWORD" scp -o StrictHostKeyChecking=no .github/scripts/deploy.sh $VPS_USER@$VPS_IP:~/deploy.sh
sshpass -p "$VPS_PASSWORD" ssh -o StrictHostKeyChecking=no $VPS_USER@$VPS_IP "bash ~/deploy.sh $REPO_NAME"