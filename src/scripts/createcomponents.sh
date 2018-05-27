#!/bin/bash

args="$@"
components_Directory="../components/$args"

if [ ! -d $components_Directory ];
then
  # if directory not exsisting .
  mkdir -p "$components_Directory"
  echo > $components_Directory/$args.js
  echo > $components_Directory/$args.css
  echo "=> React Component is created..";
else
 echo "component already exists, rename and re-run the scripts"
fi
