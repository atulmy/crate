FROM node

WORKDIR /usr/src/

COPY package.json ./

COPY . .

RUN npm install

EXPOSE 8000

CMD npm run db:migrate && npm run db:seed && npm run start