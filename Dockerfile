# Step 1: Build Angular App
FROM node:20 as build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Step 2: Serve App with Nginx
FROM nginx:1.25-alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy build output from the previous stage
COPY --from=build /app/dist/PhumlaniArendse .  # Replace with your actual Angular app folder

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
