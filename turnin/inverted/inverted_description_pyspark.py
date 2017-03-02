from __future__ import print_function

import sys

from pyspark.sql import SQLContext 
from pyspark import SparkConf
from pyspark import SparkContext
from pyspark.sql.types import * 
from pyspark_cassandra import CassandraSparkContext 


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: inverted_pyspark.py <file>", file=sys.stderr)
        exit(-1)

    conf = SparkConf().setAppName("imdb_table")
    sc = CassandraSparkContext(conf=conf) 
    sqlContext = SQLContext(sc)


    customSchema = StructType([ \
            StructField("word", StringType(), True), \
	    StructField("freq", DoubleType(), True), StructField("movies", StringType(), True)]) 

    inverted_index = sqlContext.read.format('com.databricks.spark.csv') \
                .options(header='false') \
                .load(sys.argv[1], schema=customSchema)

    temp = inverted_index.map(lambda row: {'word': row.word,
                                        'movies': row.movies,
					'freq': row.freq
                                        }).collect() 

    sc.parallelize(temp).saveToCassandra(keyspace='imdb_table', table='inverted_description')
