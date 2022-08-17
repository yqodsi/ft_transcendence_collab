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
RUN npx prisma generate
RUN npm run build

CMD  npx prisma migrate deploy && npx prisma db push --accept-data-loss && npx prisma studio &&  npm run start:dev
# CMD [  "./init.sh" ]

