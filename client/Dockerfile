FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json ./
RUN npm install -g npm@8.17.0
RUN  npm install 



# Building app

COPY . .
EXPOSE 3000

# Running the app
CMD ["npm", "run", "dev"]