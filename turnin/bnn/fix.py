import collections
import csv
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

'''
if ( len(sys.argv) == 1 ):
        print "error"
        exit(1)
for line in open("movielist"):
        for word in line.split():
                inverted_index[word.lower()].add(line)
searchterm = sys.argv[1]
list1 = inverted_index[searchterm.lower()]; 
if (len(sys.argv) > 2): 
        for search in sys.argv[2:]:
                searchterm = search
                list2 = inverted_index[searchterm.lower()]
                list1 = (list1 & list2)
for movie in list1:
        print movie
'''
with open('BnN.csv', 'r') as f, open('csv.csv', 'w') as output:  # Just use 'w' mode in 3.x
    for line in f: 
	output.write(line.replace(",," , ", empty ,"))

