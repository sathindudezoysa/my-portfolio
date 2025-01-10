## Dockerfile
################################
## BUILD ENVIRONMENT ###########
################################

# Use the official Node.js Alpine image (adjust based on your project's requirements)
# You can find the appropriate image on Docker Hub: https://hub.docker.com/_/node
# In this example, we're using node:20-alpine3.20
# run in termilnal commande line "node --version to get the version of your app"
FROM node:v18.19.0 As build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json package-lock.json ./

# Install dependencies using npm
RUN npm ci

# Copy the project files into the working directory
COPY ./ ./

# Build the React app for production
RUN npm run build

################################
#### PRODUCTION ENVIRONMENT ####
################################

# Install a lightweight HTTP server
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "3000"]