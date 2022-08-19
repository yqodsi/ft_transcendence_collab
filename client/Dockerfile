FROM node:16-alpine

# Create app directory

RUN addgroup app && adduser -S -G app  app              
RUN mkdir /app && chown -R app:app /app
USER app

WORKDIR /app

# Installing dependencies
COPY --chown=app:app package*.json ./

RUN  npm install 



# Building app

COPY --chown=app:app . .
EXPOSE 3000

# Running the app
CMD ["npm", "run", "dev"]