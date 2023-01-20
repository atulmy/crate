FROM node

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app

COPY package*.json /app/

COPY . /app

RUN npm install
RUN npm run build:client

ARG configuration=production
EXPOSE 3000

CMD npm run start:server

