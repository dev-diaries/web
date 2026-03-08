FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy built application
COPY dist/ ./dist/

# Create data directory
RUN mkdir -p /app/data

# Expose port (if needed for future web interface)
EXPOSE 3000

# Set the entry point
ENTRYPOINT ["node", "dist/index.js"]
