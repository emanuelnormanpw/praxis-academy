#!/bin/bash

echo "Masukkan nama process : "
read nama

if pgrep -x "$nama" > /dev/null
then
printf "||PROCESS SEDANG BERJALAN DAN DIMATIKAN||\n"
pkill -f $nama
else
printf "||PROCESS SEDANG TIDAK BERJALAN ATAU SALAH INPUT||\n"
fi
