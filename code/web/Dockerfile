FROM node

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build:client

EXPOSE 3000

CMD npm run start:server

