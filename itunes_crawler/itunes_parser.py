import re
import csv, json
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


JsonCategories = ["MovieID", "Type", "Artist", "TrackName", "TrackUrl", "Artwork Url", "Price"]
MovieIDList = []
TypeList = []
ArtistList = []
TrackNameList = []
TrackUrlList = []
ArtworkUrlList = []
CollectionPriceList = []


zipped = zip(MovieIDList, TypeList, ArtistList, TrackNameList, TrackUrlList, ArtworkUrlList, CollectionPriceList);

with open("movielist_sorted", 'r+') as f:
    for line in f:
	MovieIDList.append(line.strip('\n'))

Q1 = ""
Q2 = ""

for name in MovieIDList:
    filename = Q1 + str(name) + Q2
    fileopen = open(str(filename), "r")
    fileread = fileopen.read()



    #Types
    TID = re.findall('\"kind\":\"[a-zA-z0-9-]*"', fileread)
    TIDs = ""
    for IDs in TID:
        TIDs = TIDs + IDs# + "\""

    TIDs = TIDs[:-1]
    TIDs = TIDs.replace("\"kind\":\"", "")
    TIDs = TIDs.replace("\"\"", "")
    if (TIDs == ""):
        TIDs = "No info available"  

    TypeList.append(TIDs)




    #AristsList
    AID = re.findall('\"artistName\":\"[a-zA-Z0-9-&,\. ]*"', fileread)
    AIDs = ""
    for IDs in AID:
	AIDs = AIDs + IDs# + "\""

    AIDs = AIDs[:-1]
    AIDs = AIDs.replace("\"artistName\":\"", "")
    AIDs = AIDs.replace("\"\"", "")
    if (AIDs == ""):
	AIDs = "No info available"

    ArtistList.append(AIDs)



    #TrackNameList
    TnameID = re.findall('\"trackName\":\"[a-zA-Z0-9-&,\'\.\(\)\: /]*"', fileread)
    TnameIDs = ""
    for IDs in TnameID:
	TnameIDs = TnameIDs# + IDs + ""
    
    TnameIDs = TnameIDs[:-1]
    TnameIDs = TnameIDs.replace("\"trackName\":\"", "")
    TnameIDs = TnameIDs.replace("\"\"", "")
    if (TnameIDs == ""):
	TnameIDs = "No info available"

    TrackNameList.append(TnameIDs)



    #TrackUrlList
    TurlID = re.findall('\"trackViewUrl\":\"[a-zA-Z0-9-/\?=\.:& ]*"', fileread)
    TurlIDs = ""
    for IDs in TurlID:
        TurlIDs = TurlIDs + IDs# + "\""

    TurlIDs = TurlIDs[:-1]
    TurlIDs = TurlIDs.replace("\"trackViewUrl\":\"", "")
    TurlIDs = TurlIDs.replace ("\"\"", "")
    if (TurlIDs == ""):
        TurlIDs = "No info available"

    TrackUrlList.append(TurlIDs)



    #ArtworkUrlList
    AurlID = re.findall('\"artworkUrl100\":\"[a-zA-Z0-9-/\?=\.:& ]*"', fileread)
    AurlIDs = ""
    for IDs in AurlID:
        AurlIDs = AurlIDs + IDs# + "\""

    AurlIDs = AurlIDs[:-1]
    AurlIDs = AurlIDs.replace("\"artworkUrl100\":\"", "")
    AurlIDs = AurlIDs.replace("\"\"", "")
    if (AurlIDs == ""):
        AurlIDs = "No info available"

    ArtworkUrlList.append(AurlIDs)



    #CollectionPriceList
    PID = re.findall('\"collectionPrice\":[0-9\.]*', fileread)
    PIDs = ""
    for IDs in PID:
	PIDs = PIDs + IDs# + "\""

    PIDs = PIDs [:-1]
    PIDs = PIDs.replace("collectionPrice\":", "")
    PIDs = PIDs.replace("\"\"", "\"")
    if (PIDs == ""):
        PIDs = "No info available"

    CollectionPriceList.append(PIDs)



    fileopen.close()
    #break;

zipped = zipped + (zip(MovieIDList, TypeList, ArtistList, TrackNameList, TrackUrlList, ArtworkUrlList, CollectionPriceList))

JsonStr = json.dumps([dict(zip(JsonCategories, row)) for row in zipped], indent=1)
JsonData = json.loads(JsonStr)


csvfile = csv.writer(open("itunesresult.csv", "wb+"))
for x in JsonData:
    csvfile.writerow([x["MovieID"], x["Type"], x["Artist"], x["TrackName"], x["TrackUrl"], x["Artwork Url"], x["Price"]])

print JsonStr
