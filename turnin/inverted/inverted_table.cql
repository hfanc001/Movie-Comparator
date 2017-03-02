
use imdb_table ;

drop table inverted; 
create table inverted(word text primary key, freq int,  movies text );
