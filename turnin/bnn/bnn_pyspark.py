from __future__ import print_function

import sys

from pyspark.sql import SQLContext 
from pyspark import SparkConf
from pyspark import SparkContext
from pyspark.sql.types import * 
from pyspark_cassandra import CassandraSparkContext 


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: bnn_pyspark.py <file>", file=sys.stderr)
        exit(-1)

    conf = SparkConf().setAppName("imdb_table")
    sc = CassandraSparkContext(conf=conf) 
    sqlContext = SQLContext(sc)
    customSchema = StructType([ \
    	    StructField("movie", StringType(),True), \
            StructField("product", StringType(), True), \
            StructField("contributor", StringType(), True), \
            StructField("btype", StringType(), True), \
            StructField("price", StringType(), True), \
            StructField("imageurl", StringType(), True), \
            StructField("producturl", StringType(), True)]) 

    movies = sqlContext.read.format('com.databricks.spark.csv') \
                .options(header='false') \
                .load(sys.argv[1], schema=customSchema)

    good_movies = movies
			

    temp = good_movies.map(lambda row: {'movie': row.movie,
                                        'product': row.product,
					'contributor': row.contributor,
                                        'btype': row.btype,
					'price': row.price,
					'imageurl': row.imageurl, 
					'producturl': row.producturl
                                        }).collect() 

    sc.parallelize(temp).saveToCassandra(keyspace='imdb_table', table='bnn')

