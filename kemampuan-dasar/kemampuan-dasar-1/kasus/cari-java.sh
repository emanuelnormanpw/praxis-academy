#!/bin/bash

#find $1 -type f -name "*.java" -exec bash -c 'echo "Ada file Java pada direktori : {}"' \;
echo "Ada file java pada direktori :"
find $1 -type f -name "*.java" -exec dirname {} \;



