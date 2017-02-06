import re
import HTMLParser
import urllib
import urllib2
import string
from lxml import html
import csv,os,json
from exceptions import ValueError
from time import sleep


filename = str("movielist")
filee = open(str(filename), "r").read()
#title = re.findall('  "Title":.*', filee)
title = re.findall('.*\n', filee)
titles = ''.join(title)
#titles = titles.replace("  \"Title\": \"\\\"", "")
#titles = titles.replace("\\\"\"", "")
titles = titles.split('\n')
titles = [s.replace("/", "+") for s in titles]
#print titles

URLF1 = "https://play.google.com/store/search?q="

URLF3 = "&c=movies"

i = 0
crash = 3077 
for item in titles:
    i = i + 1
    if i < crash:
        continue
    url = URLF1 + item + URLF3
    testfile = urllib.URLopener()
#    name = "Page"
#    name = name + str(i)
    testfile.retrieve(url, str(item))
    sleep(3)
    print i
