# Personal Portfolio

A modern, containerized portfolio website showcasing expertise in low-level programming, system optimization, and kernel development. The portfolio is deployed using Docker and Cloudflare Tunnels for secure, reliable access.

## Technical Architecture

### Docker Setup
The application is containerized using Docker Compose with two main services:

1. **Portfolio Service**
   - Runs the main portfolio application
   - Uses environment variables for configuration
   - Persists data using Docker volumes
   - Automatically restarts on failure

2. **Cloudflared Service**
   - Manages secure tunnel connection to Cloudflare
   - Provides secure access to the portfolio
   - Uses Cloudflare Tunnel token for authentication
   - Ensures reliable connectivity

## Deployment

The portfolio is deployed using a secure Cloudflare Tunnel setup, which provides:
- Secure HTTPS access
- DDoS protection
- Global CDN distribution
- Zero-trust security model

## Environment Variables

The following environment variables are required for deployment:
- `DOCKER_REGISTRY`: Docker registry URL
- `GITHUB_OWNER`: GitHub username/organization
- `INSTANCE_NAME`: Unique instance identifier
- `ENVIRONMENT`: Deployment environment (e.g., production)
- `CLOUDFLARE_TUNNEL_TOKEN`: Cloudflare tunnel authentication token

## Technologies

- Docker & Docker Compose for containerization
- Cloudflare Tunnels for secure access
- Modern web technologies for the frontend
- JSON-based content management 