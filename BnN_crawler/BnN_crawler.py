import re
import HTMLParser
import urllib
import string
import json 
import urllib2
import string
import csv,os,json
from time import sleep
import sys

filename = str("movielist")
filee = open(str(filename), "r").read()

title = re.findall('.*\n', filee)
titles = ''.join(title)
titles = titles.split('\n')
titles = [s.replace(" ", "+") for s in titles]
titles = [s.replace("/", "+") for s in titles]


URLF = "http://www.barnesandnoble.com/s/"



i = 0
crash = 2392
for item in titles:
    i = i + 1
    if i < crash:
        continue
    url = URLF + item
    
    #testfile = urllib.URLopener()
    #testfile.retrieve(url, item)
    
    f = open(item, 'w')

    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor())
    response = opener.open(url)
    f.write(response.read())

    f.close()

    sleep(3)
    print i