FROM node:17.0.1-buster


WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]