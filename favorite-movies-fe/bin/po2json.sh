#!/bin/bash

pushd `dirname $0` > /dev/null;
ROOT_DIR=`pwd`'/..';
popd > /dev/null;

node "${ROOT_DIR}/node_modules/po2json/bin/po2json" "${ROOT_DIR}/lang/en.po" -f jed1.x -p "${ROOT_DIR}/lang/en.json";
node "${ROOT_DIR}/node_modules/po2json/bin/po2json" "${ROOT_DIR}/lang/ua.po" -f jed1.x -p "${ROOT_DIR}/lang/ua.json";