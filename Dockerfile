FROM node:12-alpine

RUN mkdir -p /opt && mkdir -p /opt/jshelper

ADD . /opt/jshelper

WORKDIR /opt/jshelper

RUN npm install

CMD ["node", "./server/index.js"]
