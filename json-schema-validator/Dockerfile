
FROM node:7

RUN mkdir -p /home/nodejs/app

WORKDIR /home/nodejs/app

COPY . /home/nodejs/app

RUN mkdir -p /home/nodejs/app/app/files

VOLUME /home/nodejs/app/app/files

RUN npm install

CMD ["node", "index.js"]