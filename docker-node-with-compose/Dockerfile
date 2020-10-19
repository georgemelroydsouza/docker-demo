FROM node:12.14

WORKDIR /usr/src/
COPY src/package.json /usr/src/

EXPOSE 8080

RUN git config --global url.https://github.com/.insteadOf git://github.com/
RUN npm install
RUN npm install --save-dev nodemon

CMD npm start

