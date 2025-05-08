FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . . 

# Handle GitHub token as build-time secret (will not be saved in image history)
ARG GITHUB_TOKEN
RUN --mount=type=secret,id=github_token \
    if [ -n "$GITHUB_TOKEN" ]; then \
      # Use token for npm if provided
      npm config set //registry.npmjs.org/:_authToken=${GITHUB_TOKEN}; \
    fi && \
    npm run build && \
    # Clear token after build
    npm config delete //registry.npmjs.org/:_authToken || true

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm install -g serve

RUN adduser -D nodeuser
USER nodeuser

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"] 