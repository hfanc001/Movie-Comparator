from __future__ import print_function
from pyspark.sql import SQLContext
from pyspark import SparkConf
from pyspark import SparkContext
from pyspark.sql.types import *
from pyspark_cassandra import CassandraSparkContext

import sys

if __name__ == "__main__":
	if len(sys.argv) != 2:
		print("Usage: bnn_invert.py <file>", file=sys.stderr)
		exit(-1)

	conf = SparkConf().setAppName("imdb_table")
	sc = CassandraSparkContext(conf=conf)
	sqlContext = SQLContext(sc)

	customSchema = StructType([ \ 
		StructField("
