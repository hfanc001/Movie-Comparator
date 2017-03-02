
use imdb_table ;

drop table imdb_movies; 
create table imdb_movies (title text primary key, 
			rating double ,
			description text,
			releasedate double , 
			genre text ,
			runtime text );
COPY imdb_movies(title, rating, description, releasedate,genre,runtime) FROM 'result.csv';
