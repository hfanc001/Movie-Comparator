from __future__ import print_function

import sys

from pyspark.sql import SQLContext 
from pyspark import SparkConf
from pyspark import SparkContext
from pyspark.sql.types import * 
from pyspark_cassandra import CassandraSparkContext 


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: 2016genre.py <file>", file=sys.stderr)
        exit(-1)

    conf = SparkConf().setAppName("imdb_table")
    sc = CassandraSparkContext(conf=conf) 
    sqlContext = SQLContext(sc)

    customSchema = StructType([ \
            StructField("title", StringType(), True), \
            StructField("rating", DoubleType(), True), \
            StructField("description", StringType(), True), \
            StructField("releasedate", DoubleType(), True), \
            StructField("genre", StringType(), True), \
            StructField("runtime", StringType(), True)]) 

    movies = sqlContext.read.format('com.databricks.spark.csv') \
                .options(header='false') \
                .load(sys.argv[1], schema=customSchema)

    2016movies_genre = movies.filter(movies.releasedate ==  2016)

    print('# of 2016 movies with genre: {}\n'.format(2016movies_genre.count()))
    temp = 2016movies_genre.map(lambda row: {'title': row.title,
                                        'genre': row.genre,
                                        'releasedate': row.releasedate,
                                        }).collect() 

    sc.parallelize(temp).saveToCassandra(keyspace='imdb_table', table='movies')

