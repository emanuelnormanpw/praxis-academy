#!/bin/bash

filename=$1
if [ -f "$filename" ]; then
echo "file exists"
else
echo "file does not exists"
fi
