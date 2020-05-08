#!/bin/sh

cd /landing
if ! diff -q package.json /package.json; then
    echo "package.json changed"
    echo "Running npm install"
    npm install
fi

exec nginx
