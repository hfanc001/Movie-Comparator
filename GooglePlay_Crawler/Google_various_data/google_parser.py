import re
import HTMLParser
import urllib
import urllib2
import string
import os
from lxml import html
import csv,os,json
from exceptions import ValueError
from time import sleep
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

movies = [] 
JsonCatagories = ["Name", "Type", "Movie", "Url"]
MovieIDList = []
FillerMoviesList = []
NamesList = []
BooksList = []
MusicList = []
TypeList = []
ProductList = []
zipped = zip(NamesList, TypeList, FillerMoviesList, ProductList)

'''
for name in os.listdir("./Google_various_data"):
    movies.append(name)

for name in movies:
    print name + "\n"
'''
with open("movielist_sorted", 'r+') as f:
    for line in f:
        movies.append(line.strip('\n'))

#print movies



Q1 = ""
Q2 = ""

for name in movies:
    filename = Q1 + str(name) + Q2
    fileopen = open(str(filename), "r")
    fileread = fileopen.read()

    '''
    #RelatedMoviesList
    MID = re.findall('<a class="title" href="/store/movies/details/[a-zA-Z0-9-_?=]*', fileread)
    MIDs = ""
    for IDs in MID:
        MIDs = MIDs + IDs + '\"'
        
    MIDs = MIDs[:-1]
    MIDs = MIDs.replace("<a class=\"title\" href=\"", "https://play.google.com")
    if (MIDs == "" or MIDs == "https://play.google.com/store/movies/details/"):
        MIDs = "No info available"
    RelatedMoviesList.append(MIDs)
    '''



    #BooksUrl
    BID = re.findall('<a class="title" href="/store/books/details/[a-zA-Z0-9-_?=]*', fileread)
    BIDs = ""
    for IDs in BID:
       	#BIDs = BIDs + IDs + "\""
	BIDs = "".join(IDs)        
        

    	#BIDs = BIDs[:-1]
    	BIDs = BIDs.replace("<a class=\"title\" href=\"", "https://play.google.com")
    	if (BIDs == "" or BIDs == "https://play.google.com/store/books/details/"):
            BIDs = "No info available"
	    
	FillerMoviesList.append(name)
	TypeList.append("Book")
    	ProductList.append(BIDs)

        BIDs = BIDs.replace("https://play.google.com/store/books/details/", "")
	BIDs = BIDs[:-16]
	BIDs = BIDs.replace("_", " ")
	if (BIDs == ""):
            BIDs = "No info available"
	NamesList.append(BIDs)
    

    #MusicUrl
    MusicID = re.findall('<a class="title" href="/store/music/[a-zA-Z0-9-_?=/]*', fileread)
    MusicIDs = ""
    for IDs in MusicID:
        MusicIDs = "".join(IDs)
	
        
        #MusicIDs = MusicIDs[:-1]
        MusicIDs = MusicIDs.replace("<a class=\"title\" href=\"", "https://play.google.com")
        if (MusicIDs == "" or MusicIDs == "https://play.google.com/store/music/details/"):
            MusicIDs = "No info available"

        FillerMoviesList.append(name)
	TypeList.append("Music")
        ProductList.append(MusicIDs)

	MusicIDs = MusicIDs.replace("https://play.google.com/store/music/album/", "")
	MusicIDs = MusicIDs.replace("https://play.google.com/store/music/album", "")
	MusicIDs = MusicIDs.replace("https://play.google.com/store/music/artist/", "")
	MusicIDs = MusicIDs.replace("_", " ")
	MusicIDs = MusicIDs[:-31]
	if (MusicIDs == ""):
	    MusicIDs = "No info available"
	NamesList.append(MusicIDs)

    
 
    fileopen.close()



MovieIDList = movies
zipped = zipped + zip(NamesList, TypeList, FillerMoviesList, ProductList)
JsonStr = json.dumps([dict(zip(JsonCatagories, row)) for row in zipped], indent=1)
JsonData = json.loads(JsonStr)


csvfile = csv.writer(open("googleresult.csv", "wb+"))

for x in JsonData:
    csvfile.writerow([x["Name"], x["Type"], x["Movie"], x["Url"]])

print JsonStr

