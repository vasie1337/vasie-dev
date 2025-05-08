FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./

# Install dependencies in a more resilient way
RUN npm ci --no-audit --no-fund || npm install

COPY . .

# Handle GitHub token as build-time secret
ARG GITHUB_TOKEN

# Run build with error handling
RUN if [ -n "$GITHUB_TOKEN" ]; then \
      echo "Building with GitHub token set"; \
      npm config set //registry.npmjs.org/:_authToken=${GITHUB_TOKEN}; \
    else \
      echo "No GitHub token provided"; \
    fi && \
    npm run build && \
    # Clean up token after build
    npm config delete //registry.npmjs.org/:_authToken || true

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install serve package
RUN npm install -g serve@14.2.1

# Create non-root user
RUN adduser -D nodeuser
USER nodeuser

EXPOSE 3000

# Use explicit CMD array format
CMD ["serve", "-s", "dist", "-l", "3000"] 