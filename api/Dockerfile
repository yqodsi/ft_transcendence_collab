FROM node:16.13.0



# FROM node:fermium-alpine as dev
# RUN apk --update add postgresql-client

WORKDIR /usr/src/app
COPY package*.json ./
COPY prisma ./prisma/
COPY init.sh  ./
RUN npm install 


EXPOSE 3333
COPY . ./

# RUN npm run prisma:generate

RUN npm run build

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait
CMD  npx prisma migrate dev &&  npm run start:dev
# CMD [  "./init.sh" ]

