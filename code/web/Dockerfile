# syntax=docker/dockerfile:1
   
FROM node:16-alpine
WORKDIR /web
COPY . .
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 3000