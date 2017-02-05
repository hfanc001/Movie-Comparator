# !/bin/bash
# itunes crawler script

rm -rf itunes_data
mkdir itunes_data

cp movielist itunes_crawler.py itunes_data
cd itunes_data

python itunes_crawler.py

rm itunes_crawler.py movielist
