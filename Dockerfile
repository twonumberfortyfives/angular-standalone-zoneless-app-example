# ------------ 1) BUILD STATIC FILES -------------

FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ------------ 2) SERVE STATIC FILES WITH NGINX -------------

FROM nginx:alpine

# Copy built files from builder
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html

# Maybe do the nginx configurations as well
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]