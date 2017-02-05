import bs4
import re
import HTMLParser
import urllib
import urllib2
import string
from lxml import html
import csv,os,json
import requests
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
#print titles

URLF1 = "https://www.fandangonow.com/list/saw/search?contentTypes=movie&q="

URLF3 = "&form=videos"

i = 0
crash = 4200
for item in titles:
    i = i + 1
    if i < crash:
        continue
    url = URLF1 + item
    testfile = urllib.URLopener()
    name = "Page"
    name = name + str(i)
    testfile.retrieve(url, name)
    sleep(3)
    print i
