FROM node as source
RUN mkdir -p /var/node
ADD src/ /var/node
WORKDIR /var/node
RUN npm install

FROM node:alpine
ARG APP_VERSION=V1.1
LABEL org.weather-app=$APP_VERSION
ENV NODE_ENV="production"
COPY --from=source /var/node /var/node
WORKDIR /var/node
EXPOSE 3000
CMD ./bin/www
