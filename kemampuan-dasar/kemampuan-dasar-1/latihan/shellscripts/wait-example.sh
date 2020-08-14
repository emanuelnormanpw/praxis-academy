#!/bin/bash

echo "wait Command" &
process_id=$!
wait $process_id
echo "Exited with status $?"
