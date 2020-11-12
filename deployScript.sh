#!/bin/bash
. ../variables.sh
npm run build --prefix-paths 
cp storymaps/*.json public/static/
cp storymaps/*.html public/static/
# find public/ -name 'index.html' -exec sed -i "/UA-5551324-4/s/$/ ga('send', 'pageview')\;/g" {} \;
scp -r public/* $SERVER/timemachine/
