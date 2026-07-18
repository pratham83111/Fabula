# ================================
# Stage 1 - Install Dependencies
# ================================
FROM node:20-alpine AS deps

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# ================================
# Stage 2 - Build Application
# ================================
FROM node:20-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN yarn build

# ================================
# Stage 3 - Production Runtime
# ================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=4799

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

EXPOSE 4799

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s \
CMD wget --spider -q http://localhost:4799 || exit 1

CMD ["yarn", "start"]
