FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./

# Install dependencies in a more resilient way
RUN npm ci --no-audit --no-fund || npm install

COPY . .

RUN npm run build

# Production stage with nginx
FROM nginx:1.25-alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Fix permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/html

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

CMD ["nginx", "-g", "daemon off;"] 