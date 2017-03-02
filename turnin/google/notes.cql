use imdb_table ;
drop table googleplay;
 
create table googleplay (product text primary key, type text, movie text, url text );
COPY googleplay(product, type, movie, url) FROM 'googleresult.csv' ;

