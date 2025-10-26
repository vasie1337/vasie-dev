# Docker Deployment Guide

This guide explains how to deploy your application using Docker and container registries.

## 🚀 Quick Start

### 1. Configure GitHub Secrets

Go to your repository: **Settings → Secrets and variables → Actions**

Add these secrets:
- `DOCKER_USERNAME`: Your registry username
- `DOCKER_TOKEN`: Your registry access token

**For Docker Hub:**
1. Create an access token at https://hub.docker.com/settings/security
2. Username: Your Docker Hub username
3. Token: Your access token

**For GitHub Container Registry (GHCR):**
1. The workflow will automatically use `GITHUB_TOKEN` if you uncomment the GHCR configuration
2. Or create a PAT with `write:packages` permission

### 2. Configure the Workflow

Edit `.github/workflows/docker-build-push.yml`:

**For Docker Hub (default):**
```yaml
env:
  REGISTRY: docker.io
  IMAGE_NAME: ${{ github.repository }}
```

**For GitHub Container Registry:**
```yaml
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
```

And uncomment the GHCR login in the workflow file.

### 3. Build and Deploy

The workflow will automatically:
- Build on push to `main` or `master` branch
- Build multi-architecture images (amd64, arm64)
- Tag images with:
  - `latest` (main branch)
  - Branch name tags
  - SHA tags
  - Semantic version tags (v1.0.0, etc.)

### 4. Using the Published Image

**Create a `.env` file:**
```bash
DOCKER_REGISTRY=docker.io
DOCKER_IMAGE_NAME=your-username/vasie-dev
IMAGE_TAG=latest
```

**Deploy with docker-compose:**
```bash
docker-compose up -d
```

**Or pull and run manually:**
```bash
docker pull your-username/vasie-dev:latest
docker run -p 3000:3000 your-username/vasie-dev:latest
```

## 📝 Registry Examples

### Docker Hub
```bash
DOCKER_REGISTRY=docker.io
DOCKER_IMAGE_NAME=your-username/vasie-dev
```

### GitHub Container Registry
```bash
DOCKER_REGISTRY=ghcr.io
DOCKER_IMAGE_NAME=ghcr.io/your-username/vasie-dev
```

### Custom Private Registry
```bash
DOCKER_REGISTRY=your-registry.com
DOCKER_IMAGE_NAME=your-registry.com/your-org/vasie-dev
```

## 🔧 Local Development

For local development, comment out the `image` line and uncomment the `build` section in `docker-compose.yml`:

```yaml
services:
  vasie-dev:
    build:
      context: .
      dockerfile: DockerFile
    # image: ${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${IMAGE_TAG}
```

Then run:
```bash
docker-compose up --build
```

## 🐛 Troubleshooting

### Build fails in CI/CD
- Check that secrets are properly configured
- Verify registry permissions
- Check Dockerfile syntax

### Can't pull image in production
- Verify image tags are correct
- Check registry permissions
- Ensure network connectivity to registry

### Multi-architecture builds are slow
- The workflow uses `docker/setup-buildx-action` for caching
- First build will be slow, subsequent builds will use cache

