import re
import HTMLParser
import urllib
import string
import json 
import urllib2
import string
from lxml import html
import csv,os,json
from exceptions import ValueError
from time import sleep

#url = raw_input('Enter url:')
#handle = urllib.urlopen(url)
#html_gunk = handle.read()


f= open("IMDblinks.sh","w+")

wget = "wget -O "
year = "2016"
url = " \"http://www.imdb.com/search/title?year=2016&sort=boxoffice_gross_us,desc&page="
page = 1

for i in range(24):
	for page in range (6):
		page = page + 1
		if page != 1:
			line = wget + str(year) + "page" + str(page) + url + str(page) + "\"\n"
		else:
			line = wget + str(year) + url + str(page) + "\"\n"
		f.write(line)
	year = int(year) - 1
	page = 0

f.close 
    