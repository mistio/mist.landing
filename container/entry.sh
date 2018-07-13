#!/bin/sh

cd /landing
if ! diff -q bower.json /bower.json; then
    echo "bower.json changed"
    echo "Running bower install"
    GIT_DIR= bower install --config.interactive=false --allow-root
fi

exec nginx
