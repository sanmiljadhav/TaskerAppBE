# Use Node 22 image with Alpine
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app


## Copy package.json and package-lock.json
COPY package.json package-lock*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app will run on (e.g., port 8080)
EXPOSE 8080

# Command to run your application
CMD ["npm", "start"]