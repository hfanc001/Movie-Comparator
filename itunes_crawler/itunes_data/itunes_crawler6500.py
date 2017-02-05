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

filename = str("movielist")
filee = open(str(filename), "r").read()

title = re.findall('.*\n', filee)
titles = ''.join(title)
titles = titles.split('\n')
titles = [s.replace(" ", "+") for s in titles]
titles = [s.replace("/", "+") for s in titles]


URLF = "https://itunes.apple.com/search?term="

i = 0
crash = 6602
for item in titles:
    i = i + 1
    if i < crash:
        continue
    url = URLF + item
    
    testfile = urllib.URLopener()

    testfile.retrieve(url, item)
    sleep(3)
    print i