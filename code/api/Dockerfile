# syntax=docker/dockerfile:1

FROM node:16-alpine
WORKDIR /api
COPY package.json .
COPY . .
RUN yarn install
CMD yarn start