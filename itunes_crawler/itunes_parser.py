import re
import csv, json
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


JsonCategories = ["MovieID", "Type", "Artist", "TrackName", "TrackUrl", "Artwork Url", "Price", "Description"]
MovieIDList = []
TypeList = []
ArtistList = []
TrackNameList = []
TrackUrlList = []
ArtworkUrlList = []
CollectionPriceList = []
LongDescriptionList = []


zipped = zip(MovieIDList, TypeList, ArtistList, TrackNameList, TrackUrlList, ArtworkUrlList, CollectionPriceList, LongDescriptionList);

with open("movielist_sorted", 'r+') as f:
    for line in f:
	MovieIDList.append(line.strip('\n'))

Q1 = ""
Q2 = ""

for name in MovieIDList:
  filename = Q1 + str(name) + Q2
  fileopen = open(str(filename), "r")
  fileread = fileopen.read()
  
  content = re.findall('{(.*\n.*)?}', fileread)
  for i in content:
    movie_content = "\n".join(i)

    #Types
    TID = re.findall('\"kind\":\"[a-zA-z0-9-]*"', movie_content)
    TIDs = ""
    for IDs in TID:
      TIDs = TIDs + IDs# + "\""
        
    TIDs = TIDs[:-1]
    TIDs = TIDs.replace("\"kind\":\"", "")
    TIDs = TIDs.replace("\"\"", "")
    TIDs = TIDs.replace(",", "")
    
    if (TIDs == ""):
      TIDs = "N/A"  
    if (TIDs[0][0] == "\""):
      TIDs = TIDs[1:]

    TypeList.append(TIDs)

    #AristsList
    AID = re.findall('\"artistName\":\"[a-zA-Z0-9-&,\. ]*"', movie_content)
    AIDs = ""
    for IDs in AID:
      AIDs = AIDs + IDs# + "\""

    AIDs = AIDs[:-1]
    AIDs = AIDs.replace("\"artistName\":\"", "")
    AIDs = AIDs.replace("\"\"", "")
    AIDs = AIDs.replace(",", "")
    if (AIDs == ""):
      AIDs = "N/A"
    if (AIDs[0][0] == "\""):
      AIDs = AIDs[1:]
    
    ArtistList.append(AIDs)

    #TrackNameList
    TnameID = re.findall('\"trackName\":\"[a-zA-Z0-9-&,\'\.\(\)\: /]*"', movie_content)
    TnameIDs = ""
    for IDs in TnameID:
      TnameIDs = TnameIDs + IDs# + ""
    
    TnameIDs = TnameIDs[:-1]
    TnameIDs = TnameIDs.replace("\"trackName\":\"", "")
    TnameIDs = TnameIDs.replace("\"\"", "")
    TnameIDs = TnameIDs.replace(",", "")
    if (TnameIDs == ""):
      TnameIDs = "N/A"
    if (TnameIDs[0][0] == "\""):
      TnameIDs = TnameIDs[1:]

    TrackNameList.append(TnameIDs)

    #TrackUrlList
    TurlID = re.findall('\"trackViewUrl\":\"[a-zA-Z0-9-/\?=\.:& ]*"', movie_content)
    TurlIDs = ""
    for IDs in TurlID:
      TurlIDs = TurlIDs + IDs# + "\""

    TurlIDs = TurlIDs[:-1]
    TurlIDs = TurlIDs.replace("\"trackViewUrl\":\"", "")
    TurlIDs = TurlIDs.replace ("\"\"", "")
    if (TurlIDs == ""):
      TurlIDs = "N/A"
    if (TurlIDs[0][0] == "\""):
      TurlIDs = TurlIDs[1:]
    
    TrackUrlList.append(TurlIDs)

    #ArtworkUrlList
    AurlID = re.findall('\"artworkUrl100\":\"[a-zA-Z0-9-/\?=\.:& ]*"', movie_content)
    AurlIDs = ""
    for IDs in AurlID:
      AurlIDs = AurlIDs + IDs# + "\""
    AurlIDs = AurlIDs[:-1]
    AurlIDs = AurlIDs.replace("\"artworkUrl100\":\"", "")
    AurlIDs = AurlIDs.replace("\"\"", "")
    AurlIDs = AurlIDs.replace(",", "")
    if (AurlIDs == ""):
      AurlIDs = "N/A"
    if (AurlIDs[0][0] == "\""):
      AurlIDs = AurlIDs[1:]
    
    ArtworkUrlList.append(AurlIDs)

    #CollectionPriceList
    PID = re.findall('\"collectionPrice\":[0-9\.]*', movie_content)
    PIDs = ""
    for IDs in PID:
      PIDs = PIDs + IDs# + "\""

    PIDs = PIDs [:-1]
    PIDs = PIDs.replace("collectionPrice\":", "")
    PIDs = PIDs.replace("\"\"", "\"")
    PIDs = PIDs.replace(",", "")
    if (PIDs == ""):
      PIDs = "N/A"
    if (PIDs[0][0] == "\""):
      PIDs = PIDs[1:]

    CollectionPriceList.append(PIDs)

    #LongDetailList
    DID = re.findall('\"longDescription\":\"[^}]*"',movie_content)#[a-zA-Z0-9-\?\.\", \']*', movie_content)
    DIDs = ""
    for IDs in DID:
      DIDs = DIDs + IDs

    DIDs = DIDs[:-1]
    DIDs = DIDs.replace("\"longDescription\":", "")
    DIDs = DIDs.replace("\"\, \"hasITunesExtras", "")
    DIDs = DIDs.replace("\"\"", "\"")
    DIDs = DIDs.replace(",", "")
    if (DIDs == ""):
      DIDs = "N/A"
    if (DIDs[0][0] == "\""):
      DIDs = DIDs[1:]
    
    LongDescriptionList.append(DIDs)

fileopen.close()

zipped = zipped + (zip(MovieIDList, TypeList, ArtistList, TrackNameList, TrackUrlList, ArtworkUrlList, CollectionPriceList, LongDescriptionList))

JsonStr = json.dumps([dict(zip(JsonCategories, row)) for row in zipped], indent=1)
JsonData = json.loads(JsonStr)


csvfile = csv.writer(open("itunesresult.csv", "wb+"))
for x in JsonData:
  csvfile.writerow([x["MovieID"], x["Type"], x["Artist"], x["TrackName"], x["TrackUrl"], x["Artwork Url"], x["Price"], x["Description"]])

#print JsonStr
#print len(MovieIDList)

