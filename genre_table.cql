
use imdb_table ;

drop table genre; 
create table genre(
	year int,
	genre text, 
	freq int, 
	PRIMARY KEY(year, genre));

COPY genre(year, genre, freq) FROM 'genre.csv'; 
