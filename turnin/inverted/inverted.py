import collections
import csv
import sys
inverted_index = collections.defaultdict(set)
'''
if ( len(sys.argv) == 1 ):
	print "error"
	exit(1)
'''
for line in open("title+description+year.csv"):
	split = line.split(',')
	split[1] = split[1].replace("\"" , "").replace("." , "").replace("?" , "").replace("!" , "")
	for word in split[1].split():
		inverted_index[word.lower()].add(split[0] )	
'''
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
with open('description_inverted.csv', 'wb') as f:  # Just use 'w' mode in 3.x
    writer  = csv.writer(f)
    for key in inverted_index:
	movie = [a.strip('\n') for a in list(inverted_index[key])]
	writer.writerow([key, len(movie) ,  movie])	

