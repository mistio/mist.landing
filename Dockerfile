FROM node:8.14.0-alpine
MAINTAINER mist.io <support@mist.io>

RUN apk add --update --no-cache git nginx

RUN npm update && npm install -g -U --no-optional polymer-cli bower --unsafe-perm

ENV bower_allow_root=true \
    bower_interactive= \
    GIT_DIR=

COPY bower.json /landing/bower.json

WORKDIR /landing

RUN bower install

RUN cp bower.json /

COPY . /landing

RUN node /usr/local/bin/polymer build

COPY ./container/nginx.conf /etc/nginx/nginx.conf

COPY ./container/entry.sh /entry.sh

EXPOSE 80
