# syntax=docker/dockerfile:1

FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Install dependencies including cross-env
RUN npm install

# Bundle app source
COPY . .

# Build the application
RUN npm run build

# Expose ports
EXPOSE 3000
EXPOSE 5173

# Start the application
CMD ["npm", "start"]
