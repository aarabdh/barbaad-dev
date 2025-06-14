# 1. Use official Node image to build the app
FROM node:20.7.0 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Build and export the static site
RUN npm run build && npm run export

# 2. Use a lightweight web server image to serve static files
FROM docker.io/library/nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy exported Next.js site to nginx's public folder
COPY --from=builder /app/out /usr/share/nginx/html

# Optional: add custom domain support
# If you have a CNAME file, copy it too:
# COPY CNAME /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

