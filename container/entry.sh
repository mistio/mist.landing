#!/bin/sh

if [ "$1" = "unison" ];then
    rm -rf /landing
    ln -s /mist.core/landing /landing 
fi

cd /landing
if ! git diff --quiet --exit-code master bower.json; then
    echo "bower.json changed"
    echo "Running bower install"
    bower install --config.interactive=false --allow-root 
fi

nginx
