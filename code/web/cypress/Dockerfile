FROM cypress/base:16
WORKDIR /
COPY package.json .
COPY package-lock.json .
ENV CI=1
RUN npm ci
RUN npx cypress verify