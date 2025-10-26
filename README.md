This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Docker Deployment

This project includes automated Docker builds and publishing to container registries.

### CI/CD Workflow

The project includes a GitHub Actions workflow (`.github/workflows/docker-build-push.yml`) that:
- Automatically builds Docker images on push to main/master
- Builds Docker images for multiple architectures (amd64, arm64)
- Pushes to your configured registry (Docker Hub, GHCR, or custom registry)
- Creates tags based on branch, PR, and semantic versioning

### Setup Instructions

1. **Configure Registry Secrets in GitHub:**
   - Go to your repository Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `DOCKER_USERNAME`: Your Docker Hub username (or GitHub username for GHCR)
     - `DOCKER_TOKEN`: Your Docker Hub access token or GitHub Personal Access Token
   
   For GitHub Container Registry:
   - You can use `GITHUB_TOKEN` which is automatically available, or create a Personal Access Token with `write:packages` permission

2. **Update workflow configuration:**
   - Edit `.github/workflows/docker-build-push.yml`
   - Modify `REGISTRY` and `IMAGE_NAME` environment variables as needed
   - Uncomment the appropriate registry login configuration

3. **Configure docker-compose.yml:**
   - By default, it pulls from the registry
   - For local development, uncomment the `build` section and comment out `image`
   - Set environment variables or use `.env` file to specify registry details

### Usage

**Production (using registry image):**
```bash
# With environment variables
DOCKER_IMAGE_NAME=your-username/vasie-dev IMAGE_TAG=latest docker-compose up -d

# Or using .env file
docker-compose up -d
```

**Local development (building from source):**
```bash
# Update docker-compose.yml to use 'build' instead of 'image'
docker-compose up --build
```

### Environment Variables

Create a `.env` file (see `.env.example`) with:
```
DOCKER_REGISTRY=docker.io
DOCKER_IMAGE_NAME=your-username/vasie-dev
IMAGE_TAG=latest
```
