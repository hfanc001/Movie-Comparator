USE imdb_table;

DROP TABLE imdb_table.bnn;

CREATE TABLE bnn(
        movie text, 
        product text PRIMARY KEY, 
        contributor text, 
        btype text, 
        price text, 
        imageurl text, 
        producturl text);

