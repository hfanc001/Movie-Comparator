 
use imdb_table ;
drop table inverted_description;
create table inverted_description(word text primary key,freq int,  movies text );

