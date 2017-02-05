#!/bin/bash
# iTunes Crawler

echo "----------Load the movie list----------"
rm movielist
echo "Make a IMDB database"
mkdir IMDB 
cp dlIMDBpages.sh imdb_Movie_crawler.py IMDB
cd IMDB
echo "Download IMDB page"
./dlIMDBpages.sh
echo "Crawl IMDB page and create movielist"
python imdb_Movie_cralwer.py >> movielist
mv movielist ..
cd ..
echo "Got the movielist, delete extra"
echo "---------------------------------------"
rm -rf IMDB