FROM node:16.16.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install


# Building app
EXPOSE 3000

# Running the app
CMD ["npm", "run", "dev"]