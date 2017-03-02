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
LongDescriptionList = []
FillerMoviesList = []


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
    TID = re.findall('\"wrapperType\":\"[a-zA-z0-9-]*"', fileread)
    TIDs = ""
    for IDs in TID:
        TIDs = "".join(IDs)

        TIDs = TIDs[:-1]
        TIDs = TIDs.replace("\"wrapperType\":\"", "")
        TIDs = TIDs.replace("\"\"", "")
        TIDs = TIDs.replace(",", "")
    
        if (TIDs == ""):
            TIDs = "No info available"  
        if (TIDs[0][0] == "\""):
            TIDs = TIDs[1:]

	FillerMoviesList.append(name)
        TypeList.append(TIDs)
    


    #AristsList
    AID = re.findall('\"artistName\":\"(.*?)"', fileread)
    AIDs = ""
    for IDs in AID:
	AIDs = "".join(IDs)

        AIDs = AIDs[:-1]
        AIDs = AIDs.replace("\"artistName\":\"", "")
        AIDs = AIDs.replace("\"\"", "")
        AIDs = AIDs.replace(",", "")
        if (AIDs == ""):
	    AIDs = "No info available"
        if (AIDs[0][0] == "\""):
            AIDs = AIDs[1:]
    
        ArtistList.append(AIDs)
    


    #TrackNameList
    TnameID = re.findall('\"trackName\":\"(.*?)"|audiobook"[^?]*', fileread)
    TnameIDs = ""
    for IDs in TnameID:
	TnameIDs = "".join(IDs)
    
        #TnameIDs = TnameIDs[:-1]
        TnameIDs = TnameIDs.replace("\"trackName\":\"", "")
        TnameIDs = TnameIDs.replace("\"\"", "")
        TnameIDs = TnameIDs.replace(",", "")
        if (TnameIDs == ""):
	    TnameIDs = "No info available"
        if (TnameIDs[0][0] == "\""):
            TnameIDs = TnameIDs[1:]
	if (TnameIDs.find("collectionCensoredName")):
	    TnameIDs = TnameIDs.split('collectionName\":\"')[-1].split('\",')
	    
        TrackNameList.append(TnameIDs)



    #TrackUrlList
    TurlID = re.findall('\"trackViewUrl\":\"(.*?)"|audiobook"[^}]*', fileread)
    TurlIDs = ""
    for IDs in TurlID:
        TurlIDs = "".join(IDs)

        TurlIDs = TurlIDs[:-1]
        TurlIDs = TurlIDs.replace("\"trackViewUrl\":\"", "")
        TurlIDs = TurlIDs.replace ("\"\"", "")
        if (TurlIDs == ""):
            TurlIDs = "No info available"
        if (TurlIDs[0][0] == "\""):
            TurlIDs = TurlIDs[1:]
        if (TurlIDs.find("artistViewUrl")):
	    TurlIDs = TurlIDs.split('artistViewUrl\":\"')[-1].split('\",')

        TrackUrlList.append(TurlIDs)
    


    #ArtworkUrlList
    AurlID = re.findall('\"artworkUrl100\":\"[a-zA-Z0-9-/\?=\.:& ]*"', fileread)
    AurlIDs = ""
    for IDs in AurlID:
        AurlIDs = "".join(IDs)

        AurlIDs = AurlIDs[:-1]
        AurlIDs = AurlIDs.replace("\"artworkUrl100\":\"", "")
        AurlIDs = AurlIDs.replace("\"\"", "")
        AurlIDs = AurlIDs.replace(",", "")
        if (AurlIDs == ""):
            AurlIDs = "No info available"
        if (AurlIDs[0][0] == "\""):
            AurlIDs = AurlIDs[1:]
    
        ArtworkUrlList.append(AurlIDs)
    


    #CollectionPriceList
    PID = re.findall('\"collectionPrice\":[0-9\.]*', fileread)
    PIDs = ""
    for IDs in PID:
	PIDs = "".join(IDs)

        PIDs = PIDs [:-1]
        PIDs = PIDs.replace("collectionPrice\":", "")
        PIDs = PIDs.replace("\"\"", "\"")
        PIDs = PIDs.replace(",", "")
        if (PIDs == ""):
            PIDs = "No info available"
        if (PIDs[0][0] == "\""):
            PIDs = PIDs[1:]

        CollectionPriceList.append(PIDs)
    
    if (len(FillerMoviesList) != len(ArtworkUrlList)):
	print len(FillerMoviesList)
	#print len(TypeList)
	#print len(ArtistList)
	#print ArtistList
	#print len(TrackNameList)
	#print len(TrackUrlList)
	print len(ArtworkUrlList)
	#print len(CollectionPriceList)    
	print name
	break;



    fileopen.close()



zipped = zipped + (zip(FillerMoviesList, TypeList, ArtistList, TrackNameList, TrackUrlList, ArtworkUrlList, CollectionPriceList))

JsonStr = json.dumps([dict(zip(JsonCategories, row)) for row in zipped],encoding='latin1', indent=1)

JsonData = json.loads(JsonStr)


csvfile = csv.writer(open("itunesresult.csv", "wb+"))
for x in JsonData:
    csvfile.writerow([x["MovieID"], x["Type"], x["Artist"], x["TrackName"], x["TrackUrl"], x["Artwork Url"], x["Price"]])

#print JsonStr

