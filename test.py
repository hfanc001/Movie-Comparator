import re
import HTMLParser
import urllib

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


	genre = re.findall('nre">\n[a-zA-Z0-9 ,-]*', filee)
	genre2 =  "".join(genre)
	genre2 = genre2.replace(" ", "")
	genre2 = genre2.replace("nre", "")
	genre2 = genre2.replace("\"", "")
	genre2 = genre2.replace(">", "")
	genre2 = genre2.split('\n')
#list
	print genre2.pop(0) 
	for item in list1:
		list3.append(item  + genre2.pop(0))
	i = i + 1


print "\n".join(list3)
#print genre2
