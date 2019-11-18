#!/bin/bash
gat   m vcv  msby build --prefix-paths 
find public/ -name 'index.html' -exec sed -i "/UA-5551324-4/s/$/ ga('send', 'pageview')\;/g" {} \;
