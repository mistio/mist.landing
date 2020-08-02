#!/bin/sh

cd /landing
if ! diff -q package.json /package.json; then
    echo "package.json changed"
    echo "Running npm install"
    npm install
fi

polymer serve --npm -H 0.0.0.0 -p 8000 &

exec nginx
