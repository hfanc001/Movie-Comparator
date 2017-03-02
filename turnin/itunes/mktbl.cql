use imdb_table;
drop table itunes;

create table itunes(
	movie text,
	type text,
	artist text,
	product text primary key,
	url text,
	artwork text,
	price text) ;

COPY itunes (
	movie,
	type,
	artist,
	product,
	url,
	artwork,
	price) FROM 'itunesresult.csv' ;
