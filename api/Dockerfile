FROM node:16.13.0



# FROM node:fermium-alpine as dev
# RUN apk --update add postgresql-client
RUN addgroup app && adduser --system --group app                
RUN mkdir /app && chown -R app:app /app
USER app

WORKDIR /app
COPY --chown=app:app package*.json ./
# COPY prisma ./prisma/

RUN npm install

COPY --chown=app:app . .
EXPOSE 3333

# RUN npm run prisma:generate
RUN npx prisma generate
RUN npm run build


CMD  npx prisma migrate deploy && npx prisma db push --accept-data-loss &&  npm run start:dev
# CMD [  "./init.sh" ]

