import re
import HTMLParser
import urllib
import string

#url = raw_input('Enter url:')
#handle = urllib.urlopen(url)
#html_gunk = handle.read()


list3 = []
i = 1 
year = 2006
for x in range( 0 , 20):
	if i % 2 == 0:
		filename=str(year)
		filename = filename+"page2"  
	else:
		year = year + 1
		filename = str(year)		
	print filename
	filee = open(str(filename), "r").read()
	urls = re.findall('<a href="[\/a-zA-Z0-9 _?#=]*"\n> <img alt="[\/a-zA-Z0-9 _?#=:\' ]*"' , filee  )
	str1 = "\n".join(urls) 
	list1 = re.findall('"[a-zA-Z0-9 _?#=: \']*"' , str1)


#Genre
	genre = re.findall('nre">\n[a-zA-Z0-9 ,-]*', filee)
	genre2 =  "".join(genre)
	genre2 = genre2.replace(" ", "")
	genre2 = genre2.replace("nre", "")
	genre2 = genre2.replace("\"", "")
	genre2 = genre2.replace(">", "")
	genre2 = genre2.split('\n')
#list
	print genre2.pop(0) 



#rating values
        ratingValue = re.findall('ratingValue" content="[0-9.]*', filee)
        ratingValues = "\n".join(ratingValue)
        ratingValues = ratingValues.replace("ratingValue\" content=\"", " ")
        ratingValues = ratingValues.split('\n')


#Release Year
	releaseYear = re.findall('lister-item-year text-muted unbold\">[()a-zA-Z ]*[0-9]*', filee)
	releaseYears = "\n".join(releaseYear)
	releaseYears = releaseYears.replace("lister-item-year text-muted unbold\">(", " ")
	releaseYears = releaseYears.replace("I", "")
	releaseYears = releaseYears.replace("X", "")
	releaseYears = releaseYears.replace(")", "")
	releaseYears = releaseYears.replace("(", "")
	releaseYears = releaseYears.replace("  ", " ")
	releaseYears = releaseYears.split('\n')


#Movie Runtime
	runtime = re.findall('class=\"runtime\">[0-9]* min', filee)
	runtimes = "\n".join(runtime)
	runtimes = runtimes.replace("class=\"runtime\">", " ")
	runtimes = runtimes.split('\n')

        for item in list1:
                list3.append(item  + genre2.pop(0) + ratingValues.pop(0) + releaseYears.pop(0) + runtimes.pop(0))

	i = i + 1


print "\n".join(list3)
