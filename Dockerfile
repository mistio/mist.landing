FROM node:6.9.1-alpine
MAINTAINER mist.io <support@mist.io>

RUN apk add --update --no-cache git nginx

RUN npm install -g polymer-cli@next bower

COPY bower.json /landing/bower.json

WORKDIR /landing

RUN bower install --config.interactive=false --allow-root

COPY . /landing

ENV GIT_DIR ''

RUN node --max_old_space_size=4096 /usr/local/bin/polymer build

COPY ./container/nginx.conf /etc/nginx/nginx.conf

COPY ./container/entry.sh /entry.sh

EXPOSE 80
