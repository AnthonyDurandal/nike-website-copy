FROM node:21-alpine3.17 
WORKDIR /client
# current node version at that time (12/2023)
# apline bc it's the lightest

# Set the working directory to /app

# Copy the current dir contents into the container at /client
COPY . /client

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
#CMD ["npm", "start"]