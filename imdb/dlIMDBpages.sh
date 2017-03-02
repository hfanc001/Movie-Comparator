# !/bin/bash
# download IMDb pages

rm -rf movie_data
mkdir movie_data
cp IMDblink.py imdb_Movie_crawler.py movie_data

cd movie_data
chmod u+x ./*.py 

python IMDblink.py
chmod u+x IMDblinks.sh
./IMDblinks.sh
python imdb_Movie_crawler.py >> movielist

rm IMDblink.py imdb_Movie_crawler.py IMDblinks.sh 
