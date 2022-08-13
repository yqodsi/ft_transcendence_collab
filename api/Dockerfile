FROM node:16.13.0



# FROM node:fermium-alpine as dev
# RUN apk --update add postgresql-client

WORKDIR /usr/src/app
COPY package*.json ./
COPY prisma ./prisma/

RUN npm install 


EXPOSE 3333
COPY . ./

RUN npm run prisma:generate

RUN npm run build

CMD [  "npm", "run", "start:migrate:prod" ]
