#!/bin/bash
npm run build --prefix-paths 
cp storymaps/*.json public/static/
cp storymaps/*.html public/static/
cp storymaps/storymap.js public/static/
cp storymaps/storymap.js public/
find public/ -name 'index.html' -exec sed -i "/UA-5551324-4/s/$/ ga('send', 'pageview')\;/g" {} \;
rsync -avz public/* $SRVR\:nodeSites/time-machine/
