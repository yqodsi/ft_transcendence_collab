FROM node:16-alpine

# Create app directory

RUN addgroup app && adduser --system --group app                
RUN mkdir /app && chown -R app:app /app
USER app

WORKDIR /app

# Installing dependencies
COPY --chown=app:app package*.json ./
RUN npm install -g npm@8.17.0
RUN  npm install 



# Building app

COPY --chown=app:app . .
EXPOSE 3000

# Running the app
CMD ["npm", "run", "dev"]