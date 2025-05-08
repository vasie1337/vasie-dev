FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./

# Install dependencies in a more resilient way
RUN npm ci --no-audit --no-fund || npm install

COPY . .

RUN npm run build

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