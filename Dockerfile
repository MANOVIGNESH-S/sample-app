# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy application files
COPY . .

# Command to run the app
CMD ["node", "app.js"]
