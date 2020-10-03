FROM node:12.16.3-alpine
LABEL maintainer="support@mist.io"

RUN apk add --update --no-cache git nginx && npm update && npm install -g -U --no-optional polymer-cli prpl-server es-dev-server rollup rimraf --unsafe-perm

COPY . /landing
WORKDIR /landing
COPY ./container/nginx.conf /etc/nginx/nginx.conf

RUN npm install && npm run build
COPY ./container/entry.sh /entry.sh
RUN cp package.json /

EXPOSE 80 8000

ENTRYPOINT [ "/entry.sh" ]

