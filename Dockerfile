# Install dependencies only when needed
FROM node:18-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

ENV NODE_ENV production

RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

RUN apk add --no-cache dumb-init

# Uncomment the following line in case you want to disable telemetry during runtime.
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=node:node /app .
# COPY --from=builder --chown=node:node /app/package.json ./
# COPY --from=builder --chown=node:node /app/.env ./
# COPY --from=builder --chown=node:node /app/server.js ./
# COPY --from=builder --chown=node:node /app/next.config.js ./
# COPY --from=builder --chown=node:node /app/next-i18next.config.js ./
# COPY --from=builder --chown=node:node /app/.next/ ./.next
# COPY --from=builder --chown=node:node /app/node_modules ./node_modules
# COPY --from=builder --chown=node:node /app/public ./public
# COPY --from=builder --chown=node:node /app/server ./server
# COPY --from=builder --chown=node:node /app/utils ./utils

USER node
EXPOSE $PORT

CMD ["dumb-init", "npm", "start"]
