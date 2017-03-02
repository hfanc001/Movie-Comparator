import re
import HTMLParser
import urllib
import string
import json 

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

#url = raw_input('Enter url:')
#handle = urllib.urlopen(url)
#html_gunk = handle.read()


list3 = []
JsonCatagories = ["Title" , "Genre" , "Rating", "ReleaseDate"  , "Runtime", "Description" ]
list5 = []
list6 = []
list7 = []
list8 = []
list9 = []
list10 = []
zipped = zip(list5,list6, list7,list8,list9,list10)
movietitle = []
year = 2017

for x in range(0 , 150):
#Each HTML pages
	if x % 6 == 5:
		filename=str(year)
		filename = filename+"page6" 
	elif x % 6 == 4: 
		filename=str(year)
		filename = filename+"page5" 
	elif x % 6 == 3:
		filename=str(year)
		filename = filename+"page4" 
	elif x % 6 == 2:
		filename=str(year)
		filename = filename+"page3" 
	elif x % 6 == 1: 
		filename=str(year)
		filename = filename+"page2" 
	else:
		year = year - 1 
		filename = str(year)

	file2 = open(str(filename), "r").read()
	#print filename
	list1 = [] 
	file1= re.findall('(<a href="[\/a-zA-Z0-9\-. _?#=]*"\n> <img alt=".*(\n.*)*?\n\n)' , file2)
	for y in range(0,50):

		filee = "\n".join(file1[y])	
		# URL 	
		urls = re.findall('<a href="[\/a-zA-Z0-9\-. _?#=]*"\n> <img alt=".*"' , filee  )
		str1 = "\n".join(urls) 
		list2 = re.findall('img alt.*', str1)
		str2 = "\n".join(list2)
		list1 = re.findall('".*"' , str2)
		str3 =  "\n".join(list1)
		str3 = str3.replace("\"" , "")
		list1 = str3.split('\n')
		#print '\n'.join(list1)
		movietitle = movietitle + list1
	#Genre
		genre = re.findall('nre">\n[a-zA-Z0-9 ,-]*', filee)
		genre2 =  "".join(genre)
		genre2 = genre2.replace(" ", "")
		genre2 = genre2.replace("nre", "")
		genre2 = genre2.replace("\"", "")
		genre2 = genre2.replace(">", "")
		genre2 = genre2.split('\n')
		genre2.pop(0)
		if not genre2:
			genre2.append("Info Not Available")


	#Rating values
		ratingValue = re.findall('ratingValue" content="[0-9.]*', filee)
		ratingValues = "\n ".join(ratingValue)
		ratingValues = ratingValues.replace("ratingValue\" content=\"", " ")
		ratingValues = ratingValues.split('\n')
		if not ratingValues:
			ratingValues.append("Info Not Available")


	#Release Year
		releaseYear = re.findall('lister-item-year text-muted unbold\">[()a-zA-Z ]*[0-9]*', filee)
		releaseYears = "\n".join(releaseYear)
		releaseYears = releaseYears.replace("lister-item-year text-muted unbold\">(", " ")
		releaseYears = releaseYears.replace("I", "")
		releaseYears = releaseYears.replace("X", "")
		releaseYears = releaseYears.replace(")", "")
		releaseYears = releaseYears.replace("(", "")
		releaseYears = releaseYears.replace("V", "")
		releaseYears = releaseYears.replace("  ", " ")
		releaseYears = releaseYears.split('\n')
		if not releaseYears:
			releaseYears.append("Info Not Available")
	#Detail
		detail = re.findall('<p class=\"text-muted\">\n[a-zA-Z0-9 ,.\']*', filee)
		details = '\n'.join(detail)
		details = details.replace("<p class=\"text-muted\">\n", "")
		details = details.replace("</p>", "")
		details = details.split('\n')
		if not details:
			details.append("Info Not Available")

	#Movie Runtime
		runtime = re.findall('class=\"runtime\">[0-9]* min', filee)
		runtimes = "\n".join(runtime)
		runtimes = runtimes.replace("class=\"runtime\">", "")
		runtimes = runtimes.split('\n')
		if not runtimes:
			runtimes.append("Info Not Available")

		zipped = zipped + (zip(list1, genre2, ratingValues, releaseYears , runtimes, details))
		for item in list1:
			list3.append(item + " "+genre2.pop(0)  + ratingValues.pop(0) + releaseYears.pop(0)+  " " + runtimes.pop(0) + " " + details.pop(0))		
	
dic = (dict(zip(JsonCatagories, row)) for row in zipped)
dictionary = dict(zip(movietitle, dic))
#JsonStr = json.dumps([dict(zip(JsonCatagories, row)) for row in zipped], indent=1)
JsonStr = json.dumps(dictionary , indent=1)
JsonData = json.loads(JsonStr)

print JsonStr 

#JsonData is a list of python dictionaries. 
#This is how you extract data from the JsonData" 
#Results is all the different movies. Each Result is it's own movies with all details with it. 
