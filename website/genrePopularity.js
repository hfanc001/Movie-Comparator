
  FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'column3d',
    renderAt: 'GenreChart',
    width: "700",
    height: "500",
    dataFormat: 'json',
    dataSource: {
        "chart": {
        "caption": "Overall Popularity of Movie Genres: 1992 - 2016",
        "subcaption": "Click on a column to drill-down",
        //"numberprefix": "$",
        "showvalues": "0",
        "bgcolor": "FFFFFF",
        "xaxisname": "Genre",
		"yaxisname": "Movie Relevancy",
        "plotgradientcolor": "",
        "showalternatehgridcolor": "0",
        "showplotborder": "0",
        "divlinecolor": "CCCCCC",
        "canvasborderalpha": "0",
    },
    "data": [
        {
            "label": "Action",
            "value": "1156",
            "link": "newchart-xml-ActionYears",
            "color": "e40000"
        },
        {
            "label": "Adventure",
            "value": "853",
            "link": "newchart-xml-AdventureYears",
            "color": "e46a00"
        },
        {
            "label": "Animation",
            "value": "288",
            "link": "newchart-xml-AnimationYears",
            "color": "12e400"
        },
        {
            "label": "Biography",
            "value": "468",
            "link": "newchart-xml-BiographyYears",
            "color": "00e481"
        },
		{
            "label": "Comedy",
            "value": "2496",
            "link": "newchart-xml-ComedyYears",
            "color": "00e4ba"
        },
		{
            "label": "Crime",
            "value": "1034",
            "link": "newchart-xml-CrimeYears",
            "color": "00e4e4"
        },
		{
            "label": "Documentary",
            "value": "361",
            "link": "newchart-xml-DocumentaryYears",
            "color": "0088e4"
        },
		{
            "label": "Drama",
            "value": "3433",
            "link": "newchart-xml-DramaYears",
            "color": "e400c9"
        },
		{
            "label": "Family",
            "value": "472",
            "link": "newchart-xml-FamilyYears",
            "color": "e40094"
        },
		{
            "label": "Fantasy",
            "value": "386",
            "link": "newchart-xml-FantasyYears",
            "color": "e4005f"
        },
		{
            "label": "History",
            "value": "205",
            "link": "newchart-xml-HistoryYears",
            "color": "276a77"
        },
		{
            "label": "Horror",
            "value": "414",
            "link": "newchart-xml-HorrorYears",
            "color": "03171c"
        },
		{
            "label": "Music",
            "value": "261",
            "link": "newchart-xml-MusicYears",
            "color": "98a2b7"
        },
		{
            "label": "Musical",
            "value": "62",
            "link": "newchart-xml-MusicalYears",
            "color": "194f08"
        },
		{
            "label": "Mystery",
            "value": "452",
            "link": "newchart-xml-MysteryYears",
            "color": "fc0551"
        },
		{
            "label": "Romance",
            "value": "1336",
            "link": "newchart-xml-RomanceYears",
            "color": "7f7494"
        },
		{
            "label": "Sci-Fi",
            "value": "320",
            "link": "newchart-xml-Sci-FiYears",
            "color": "789266"
        },
		{
            "label": "Short",
            "value": "33",
            "link": "newchart-xml-ShortYears",
            "color": "42398a"
        },
		{
            "label": "Sport",
            "value": "194",
            "link": "newchart-xml-SportYears",
            "color": "b883ab"
        },
		{
            "label": "Thriller",
            "value": "755",
            "link": "newchart-xml-ThrillerYears",
            "color": "6baa01"
        },
		{
            "label": "War",
            "value": "110",
            "link": "newchart-xml-WarYears",
            "color": "7ce806"
        },
		{
            "label": "Western",
            "value": "35",
            "link": "newchart-xml-WesternYears",
            "color": "086c45"
        },
    ],
	
	
	
    "linkeddata": [
	
		//Action Drilled Down
	
        {
            "id": "ActionYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Action",
                    "subcaption": "Click on a column to drill-down",
                    "xaxisname": "Year",
                    "yaxisname": "Number of Movies",
                    //"numberprefix": "$",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "36",
                        "color": "e40000"
                    },
                    {
                        "label": "1993",
                        "value": "37",
                        "color": "e40000"
                    },
					{
                        "label": "1994",
                        "value": "34",
                        "color": "e40000"
                    },
					{
                        "label": "1995",
                        "value": "43",
                        "color": "e40000"
                    },
					{
                        "label": "1996",
                        "value": "37",
                        "color": "e40000"
                    },
					{
                        "label": "1997",
                        "value": "55",
                        "color": "e40000"
                    },
					{
                        "label": "1998",
                        "value": "41",
                        "color": "e40000"
                    },
					{
                        "label": "1999",
                        "value": "29",
                        "color": "e40000"
                    },
					{
                        "label": "2000",
                        "value": "37",
                        "color": "e40000"
                    },
					{
                        "label": "2001",
                        "value": "40",
                        "color": "e40000"
                    },
					{
                        "label": "2002",
                        "value": "48",
                        "color": "e40000"
                    },
					{
                        "label": "2003",
                        "value": "50",
                        "color": "e40000"
                    },
					{
                        "label": "2004",
                        "value": "47",
                        "color": "e40000"
                    },
					{
                        "label": "2005",
                        "value": "46",
                        "color": "e40000"
                    },
					{
                        "label": "2006",
                        "value": "38",
                        "color": "e40000"
                    },
					{
                        "label": "2007",
                        "value": "40",
                        "color": "e40000"
                    },
					{
                        "label": "2008",
                        "value": "53",
                        "color": "e40000"
                    },
					{
                        "label": "2009",
                        "value": "46",
                        "color": "e40000"
                    },
					{
                        "label": "2010",
                        "value": "57",
                        "color": "e40000"
                    },
					{
                        "label": "2011",
                        "value": "55",
                        "color": "e40000"
                    },
					{
                        "label": "2012",
                        "value": "50",
                        "color": "e40000"
                    },
					{
                        "label": "2013",
                        "value": "55",
                        "color": "e40000"
                    },
					{
                        "label": "2014",
                        "value": "60",
                        "color": "e40000"
                    },
					{
                        "label": "2015",
                        "value": "60",
                        "color": "e40000"
                    },
					{
                        "label": "2016",
                        "value": "72",
                        "color": "e40000"
                    },
                ],
            }
        },
		
		//Adventure Drilled Down
		
        {
            "id": "AdventureYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movie Per Year: Adventure",
                    "subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "24",
                        "color": "e46a00"
                    },
                    {
                        "label": "1993",
                        "value": "22",
                        "color": "e46a00"
                    },
					{
                        "label": "1994",
                        "value": "36",
                        "color": "e46a00"
                    },
					{
                        "label": "1995",
                        "value": "35",
                        "color": "e46a00"
                    },
					{
                        "label": "1996",
                        "value": "32",
                        "color": "e46a00"
                    },
					{
                        "label": "1997",
                        "value": "35",
                        "color": "e46a000"
                    },
					{
                        "label": "1998",
                        "value": "29",
                        "color": "e46a000"
                    },
					{
                        "label": "1999",
                        "value": "25",
                        "color": "e46a000"
                    },
					{
                        "label": "2000",
                        "value": "35",
                        "color": "e46a000"
                    },
					{
                        "label": "2001",
                        "value": "32",
                        "color": "e46a000"
                    },
					{
                        "label": "2002",
                        "value": "35",
                        "color": "e46a000"
                    },
					{
                        "label": "2003",
                        "value": "41",
                        "color": "e46a000"
                    },
					{
                        "label": "2004",
                        "value": "35",
                        "color": "e46a000"
                    },
					{
                        "label": "2005",
                        "value": "44",
                        "color": "e46a000"
                    },
					{
                        "label": "2006",
                        "value": "42",
                        "color": "e46a000"
                    },
					{
                        "label": "2007",
                        "value": "38",
                        "color": "e46a000"
                    },
					{
                        "label": "2008",
                        "value": "44",
                        "color": "e46a000"
                    },
					{
                        "label": "2009",
                        "value": "40",
                        "color": "e46a000"
                    },
					{
                        "label": "2010",
                        "value": "41",
                        "color": "e46a000"
                    },
					{
                        "label": "2011",
                        "value": "45",
                        "color": "e46a000"
                    },
					{
                        "label": "2012",
                        "value": "36",
                        "color": "e46a000"
                    },
					{
                        "label": "2013",
                        "value": "41",
                        "color": "e46a000"
                    },
					{
                        "label": "2014",
                        "value": "50",
                        "color": "e46a000"
                    },
					{
                        "label": "2015",
                        "value": "47",
                        "color": "e46a000"
                    },
					{
                        "label": "2016",
                        "value": "61",
                        "color": "e46a000"
                    },
                ],
            }
        },
        
		//Animation Drilled Down
		
		{
            "id": "AnimationYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Animation",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "7",
                        "color": "12e400"
                    },
                    {
                        "label": "1993",
                        "value": "5",
                        "color": "12e400"
                    },
					{
                        "label": "1994",
                        "value": "6",
                        "color": "12e400"
                    },
					{
                        "label": "1995",
                        "value": "5",
                        "color": "12e400"
                    },
					{
                        "label": "1996",
                        "value": "7",
                        "color": "12e400"
                    },
					{
                        "label": "1997",
                        "value": "6",
                        "color": "12e400"
                    },
					{
                        "label": "1998",
                        "value": "7",
                        "color": "12e400"
                    },
					{
                        "label": "1999",
                        "value": "9",
                        "color": "12e400"
                    },
					{
                        "label": "2000",
                        "value": "10",
                        "color": "12e400"
                    },
					{
                        "label": "2001",
                        "value": "13",
                        "color": "12e400"
                    },
					{
                        "label": "2002",
                        "value": "13",
                        "color": "12e400"
                    },
					{
                        "label": "2003",
                        "value": "8",
                        "color": "12e400"
                    },
					{
                        "label": "2004",
                        "value": "13",
                        "color": "12e400"
                    },
					{
                        "label": "2005",
                        "value": "10",
                        "color": "12e400"
                    },
					{
                        "label": "2006",
                        "value": "18",
                        "color": "12e400"
                    },
					{
                        "label": "2007",
                        "value": "15",
                        "color": "12e400"
                    },
					{
                        "label": "2008",
                        "value": "14",
                        "color": "12e400"
                    },
					{
                        "label": "2009",
                        "value": "15",
                        "color": "12e400"
                    },
					{
                        "label": "2010",
                        "value": "12",
                        "color": "12e400"
                    },
					{
                        "label": "2011",
                        "value": "18",
                        "color": "12e400"
                    },
					{
                        "label": "2012",
                        "value": "10",
                        "color": "12e400"
                    },
					{
                        "label": "2013",
                        "value": "17",
                        "color": "12e400"
                    },
					{
                        "label": "2014",
                        "value": "12",
                        "color": "12e400"
                    },
					{
                        "label": "2015",
                        "value": "18",
                        "color": "12e400"
                    },
					{
                        "label": "2016",
                        "value": "20",
                        "color": "12e400"
                    },
                ],
            }
        },
		
		//Biography Drilled Down(FIX STARTING FROM HERE)
		
		{
            "id": "BiographyYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Biography",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "14",
                        "color": "00e481"
                    },
                    {
                        "label": "1993",
                        "value": "19",
                        "color": "00e481"
                    },
					{
                        "label": "1994",
                        "value": "18",
                        "color": "00e481"
                    },
					{
                        "label": "1995",
                        "value": "13",
                        "color": "00e481"
                    },
					{
                        "label": "1996",
                        "value": "9",
                        "color": "00e481"
                    },
					{
                        "label": "1997",
                        "value": "11",
                        "color": "00e481"
                    },
					{
                        "label": "1998",
                        "value": "13",
                        "color": "00e481"
                    },
					{
                        "label": "1999",
                        "value": "17",
                        "color": "00e481"
                    },
					{
                        "label": "2000",
                        "value": "10",
                        "color": "00e481"
                    },
					{
                        "label": "2001",
                        "value": "11",
                        "color": "00e481"
                    },
					{
                        "label": "2002",
                        "value": "12",
                        "color": "00e481"
                    },
					{
                        "label": "2003",
                        "value": "20",
                        "color": "00e481"
                    },
					{
                        "label": "2004",
                        "value": "18",
                        "color": "00e481"
                    },
					{
                        "label": "2005",
                        "value": "16",
                        "color": "00e481"
                    },
					{
                        "label": "2006",
                        "value": "22",
                        "color": "00e481"
                    },
					{
                        "label": "2007",
                        "value": "22",
                        "color": "00e481"
                    },
					{
                        "label": "2008",
                        "value": "21",
                        "color": "00e481"
                    },
					{
                        "label": "2009",
                        "value": "20",
                        "color": "00e481"
                    },
					{
                        "label": "2010",
                        "value": "24",
                        "color": "00e481"
                    },
					{
                        "label": "2011",
                        "value": "14",
                        "color": "00e481"
                    },
					{
                        "label": "2012",
                        "value": "19",
                        "color": "00e481"
                    },
					{
                        "label": "2013",
                        "value": "29",
                        "color": "00e481"
                    },
					{
                        "label": "2014",
                        "value": "31",
                        "color": "00e481"
                    },
					{
                        "label": "2015",
                        "value": "37",
                        "color": "00e481"
                    },
					{
                        "label": "2016",
                        "value": "28",
                        "color": "00e481"
                    },
                ],
            }
        },
		
		//Comedy Drilled Down
		
		{
            "id": "ComedyYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Comedy",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "95",
                        "color": "00e4ba"
                    },
                    {
                        "label": "1993",
                        "value": "98",
                        "color": "00e4ba"
                    },
					{
                        "label": "1994",
                        "value": "135",
                        "color": "00e4ba"
                    },
					{
                        "label": "1995",
                        "value": "105",
                        "color": "00e4ba"
                    },
					{
                        "label": "1996",
                        "value": "113",
                        "color": "00e4ba"
                    },
					{
                        "label": "1997",
                        "value": "104",
                        "color": "00e4ba"
                    },
					{
                        "label": "1998",
                        "value": "108",
                        "color": "00e4ba"
                    },
					{
                        "label": "1999",
                        "value": "112",
                        "color": "00e4ba"
                    },
					{
                        "label": "2000",
                        "value": "108",
                        "color": "00e4ba"
                    },
					{
                        "label": "2001",
                        "value": "109",
                        "color": "00e4ba"
                    },
					{
                        "label": "2002",
                        "value": "99",
                        "color": "00e4ba"
                    },
					{
                        "label": "2003",
                        "value": "105",
                        "color": "00e4ba"
                    },
					{
                        "label": "2004",
                        "value": "107",
                        "color": "00e4ba"
                    },
					{
                        "label": "2005",
                        "value": "104",
                        "color": "00e4ba"
                    },
					{
                        "label": "2006",
                        "value": "96",
                        "color": "00e4ba"
                    },
					{
                        "label": "2007",
                        "value": "88",
                        "color": "00e4ba"
                    },
					{
                        "label": "2008",
                        "value": "96",
                        "color": "00e4ba"
                    },
					{
                        "label": "2009",
                        "value": "91",
                        "color": "00e4ba"
                    },
					{
                        "label": "2010",
                        "value": "101",
                        "color": "00e4ba"
                    },
					{
                        "label": "2011",
                        "value": "100",
                        "color": "00e4ba"
                    },
					{
                        "label": "2012",
                        "value": "94",
                        "color": "00e4ba"
                    },
					{
                        "label": "2013",
                        "value": "78",
                        "color": "00e4ba"
                    },
					{
                        "label": "2014",
                        "value": "75",
                        "color": "00e4ba"
                    },
					{
                        "label": "2015",
                        "value": "91",
                        "color": "00e4ba"
                    },
					{
                        "label": "2016",
                        "value": "84",
                        "color": "00e4ba"
                    },
                ],
            }
        },
		
		//Crime Drilled Down
		
		{
            "id": "CrimeYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Crime",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "53",
                        "color": "00e4e4"
                    },
                    {
                        "label": "1993",
                        "value": "47",
                        "color": "00e4e4"
                    },
					{
                        "label": "1994",
                        "value": "55",
                        "color": "00e4e4"
                    },
					{
                        "label": "1995",
                        "value": "50",
                        "color": "00e4e4"
                    },
					{
                        "label": "1996",
                        "value": "42",
                        "color": "00e4e4"
                    },
					{
                        "label": "1997",
                        "value": "47",
                        "color": "00e4e4"
                    },
					{
                        "label": "1998",
                        "value": "46",
                        "color": "00e4e4"
                    },
					{
                        "label": "1999",
                        "value": "32",
                        "color": "00e4e4"
                    },
					{
                        "label": "2000",
                        "value": "43",
                        "color": "00e4e4"
                    },
					{
                        "label": "2001",
                        "value": "51",
                        "color": "00e4e4"
                    },
					{
                        "label": "2002",
                        "value": "51",
                        "color": "00e4e4"
                    },
					{
                        "label": "2003",
                        "value": "46",
                        "color": "00e4e4"
                    },
					{
                        "label": "2004",
                        "value": "41",
                        "color": "00e4e4"
                    },
					{
                        "label": "2005",
                        "value": "45",
                        "color": "00e4e4"
                    },
					{
                        "label": "2006",
                        "value": "40",
                        "color": "00e4e4"
                    },
					{
                        "label": "2007",
                        "value": "43",
                        "color": "00e4e4"
                    },
					{
                        "label": "2008",
                        "value": "34",
                        "color": "00e4e4"
                    },
					{
                        "label": "2009",
                        "value": "47",
                        "color": "00e4e4"
                    },
					{
                        "label": "2010",
                        "value": "35",
                        "color": "00e4e4"
                    },
					{
                        "label": "2011",
                        "value": "30",
                        "color": "00e4e4"
                    },
					{
                        "label": "2012",
                        "value": "29",
                        "color": "00e4e4"
                    },
					{
                        "label": "2013",
                        "value": "39",
                        "color": "00e4e4"
                    },
					{
                        "label": "2014",
                        "value": "29",
                        "color": "00e4e4"
                    },
					{
                        "label": "2015",
                        "value": "31",
                        "color": "00e4e4"
                    },
					{
                        "label": "2016",
                        "value": "28",
                        "color": "00e4e4"
                    },
                ],
            }
        },
		
		//Documentary Drilled Down
		
		{
            "id": "DocumentaryYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Documentary",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "5",
                        "color": "0088e4"
                    },
                    {
                        "label": "1993",
                        "value": "6",
                        "color": "0088e4"
                    },
					{
                        "label": "1994",
                        "value": "8",
                        "color": "0088e4"
                    },
					{
                        "label": "1995",
                        "value": "8",
                        "color": "0088e4"
                    },
					{
                        "label": "1996",
                        "value": "6",
                        "color": "0088e4"
                    },
					{
                        "label": "1997",
                        "value": "8",
                        "color": "0088e4"
                    },
					{
                        "label": "1998",
                        "value": "12",
                        "color": "0088e4"
                    },
					{
                        "label": "1999",
                        "value": "16",
                        "color": "0088e4"
                    },
					{
                        "label": "2000",
                        "value": "14",
                        "color": "0088e4"
                    },
					{
                        "label": "2001",
                        "value": "6",
                        "color": "0088e4"
                    },
					{
                        "label": "2002",
                        "value": "20",
                        "color": "0088e4"
                    },
					{
                        "label": "2003",
                        "value": "18",
                        "color": "0088e4"
                    },
					{
                        "label": "2004",
                        "value": "17",
                        "color": "0088e4"
                    },
					{
                        "label": "2005",
                        "value": "19",
                        "color": "0088e4"
                    },
					{
                        "label": "2006",
                        "value": "11",
                        "color": "0088e4"
                    },
					{
                        "label": "2007",
                        "value": "14",
                        "color": "0088e4"
                    },
					{
                        "label": "2008",
                        "value": "19",
                        "color": "0088e4"
                    },
					{
                        "label": "2009",
                        "value": "16",
                        "color": "0088e4"
                    },
					{
                        "label": "2010",
                        "value": "24",
                        "color": "0088e4"
                    },
					{
                        "label": "2011",
                        "value": "23",
                        "color": "0088e4"
                    },
					{
                        "label": "2012",
                        "value": "22",
                        "color": "0088e4"
                    },
					{
                        "label": "2013",
                        "value": "20",
                        "color": "0088e4"
                    },
					{
                        "label": "2014",
                        "value": "15",
                        "color": "0088e4"
                    },
					{
                        "label": "2015",
                        "value": "22",
                        "color": "0088e4"
                    },
					{
                        "label": "2016",
                        "value": "12",
                        "color": "0088e4"
                    },
                ],
            }
        },
		
		//Drama Drilled Down
		
		{
            "id": "DramaYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Drama",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "157",
                        "color": "e400c9"
                    },
                    {
                        "label": "1993",
                        "value": "153",
                        "color": "e400c9"
                    },
					{
                        "label": "1994",
                        "value": "139",
                        "color": "e400c9"
                    },
					{
                        "label": "1995",
                        "value": "146",
                        "color": "e400c9"
                    },
					{
                        "label": "1996",
                        "value": "147",
                        "color": "e400c9"
                    },
					{
                        "label": "1997",
                        "value": "136",
                        "color": "e400c9"
                    },
					{
                        "label": "1998",
                        "value": "146",
                        "color": "e400c9"
                    },
					{
                        "label": "1999",
                        "value": "145",
                        "color": "e400c9"
                    },
					{
                        "label": "2000",
                        "value": "145",
                        "color": "e400c9"
                    },
					{
                        "label": "2001",
                        "value": "144",
                        "color": "e400c9"
                    },
					{
                        "label": "2002",
                        "value": "137",
                        "color": "e400c9"
                    },
					{
                        "label": "2003",
                        "value": "133",
                        "color": "e400c9"
                    },
					{
                        "label": "2004",
                        "value": "130",
                        "color": "e400c9"
                    },
					{
                        "label": "2005",
                        "value": "132",
                        "color": "e400c9"
                    },
					{
                        "label": "2006",
                        "value": "130",
                        "color": "e400c9"
                    },
					{
                        "label": "2007",
                        "value": "128",
                        "color": "e400c9"
                    },
					{
                        "label": "2008",
                        "value": "139",
                        "color": "e400c9"
                    },
					{
                        "label": "2009",
                        "value": "132",
                        "color": "e400c9"
                    },
					{
                        "label": "2010",
                        "value": "124",
                        "color": "e400c9"
                    },
					{
                        "label": "2011",
                        "value": "125",
                        "color": "e400c9"
                    },
					{
                        "label": "2012",
                        "value": "132",
                        "color": "e400c9"
                    },
					{
                        "label": "2013",
                        "value": "132",
                        "color": "e400c9"
                    },
					{
                        "label": "2014",
                        "value": "137",
                        "color": "e400c9"
                    },
					{
                        "label": "2015",
                        "value": "137",
                        "color": "e400c9"
                    },
					{
                        "label": "2016",
                        "value": "127",
                        "color": "e400c9"
                    },
                ],
            }
        },
		
		//Family Drilled Down
		
		{
            "id": "FamilyYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Family",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "14",
                        "color": "e40094"
                    },
                    {
                        "label": "1993",
                        "value": "22",
                        "color": "e40094"
                    },
					{
                        "label": "1994",
                        "value": "30",
                        "color": "e40094"
                    },
					{
                        "label": "1995",
                        "value": "25",
                        "color": "e40094"
                    },
					{
                        "label": "1996",
                        "value": "22",
                        "color": "e40094"
                    },
					{
                        "label": "1997",
                        "value": "23",
                        "color": "e40094"
                    },
					{
                        "label": "1998",
                        "value": "16",
                        "color": "e40094"
                    },
					{
                        "label": "1999",
                        "value": "16",
                        "color": "e40094"
                    },
					{
                        "label": "2000",
                        "value": "12",
                        "color": "e40094"
                    },
					{
                        "label": "2001",
                        "value": "10",
                        "color": "e40094"
                    },
					{
                        "label": "2002",
                        "value": "18",
                        "color": "e40094"
                    },
					{
                        "label": "2003",
                        "value": "19",
                        "color": "e40094"
                    },
					{
                        "label": "2004",
                        "value": "23",
                        "color": "e40094"
                    },
					{
                        "label": "2005",
                        "value": "27",
                        "color": "e40094"
                    },
					{
                        "label": "2006",
                        "value": "25",
                        "color": "e40094"
                    },
					{
                        "label": "2007",
                        "value": "32",
                        "color": "e40094"
                    },
					{
                        "label": "2008",
                        "value": "19",
                        "color": "e40094"
                    },
					{
                        "label": "2009",
                        "value": "19",
                        "color": "e40094"
                    },
					{
                        "label": "2010",
                        "value": "25",
                        "color": "e40094"
                    },
					{
                        "label": "2011",
                        "value": "17",
                        "color": "e40094"
                    },
					{
                        "label": "2012",
                        "value": "11",
                        "color": "e40094"
                    },
					{
                        "label": "2013",
                        "value": "8",
                        "color": "e40094"
                    },
					{
                        "label": "2014",
                        "value": "14",
                        "color": "e40094"
                    },
					{
                        "label": "2015",
                        "value": "8",
                        "color": "e40094"
                    },
					{
                        "label": "2016",
                        "value": "17",
                        "color": "e40094"
                    },
                ],
            }
        },
		
		//Fantasy Drilled Down
		
		{
            "id": "FantasyYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Fantasy",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "14",
                        "color": "e4005f"
                    },
                    {
                        "label": "1993",
                        "value": "21",
                        "color": "e4005f"
                    },
					{
                        "label": "1994",
                        "value": "15",
                        "color": "e4005f"
                    },
					{
                        "label": "1995",
                        "value": "19",
                        "color": "e4005f"
                    },
					{
                        "label": "1996",
                        "value": "16",
                        "color": "e4005f"
                    },
					{
                        "label": "1997",
                        "value": "14",
                        "color": "e4005f"
                    },
					{
                        "label": "1998",
                        "value": "10",
                        "color": "e4005f"
                    },
					{
                        "label": "1999",
                        "value": "16",
                        "color": "e4005f"
                    },
					{
                        "label": "2000",
                        "value": "16",
                        "color": "e4005f"
                    },
					{
                        "label": "2001",
                        "value": "16",
                        "color": "e4005f"
                    },
					{
                        "label": "2002",
                        "value": "11",
                        "color": "e4005f"
                    },
					{
                        "label": "2003",
                        "value": "17",
                        "color": "e4005f"
                    },
					{
                        "label": "2004",
                        "value": "9",
                        "color": "e4005f"
                    },
					{
                        "label": "2005",
                        "value": "15",
                        "color": "e4005f"
                    },
					{
                        "label": "2006",
                        "value": "20",
                        "color": "e4005f"
                    },
					{
                        "label": "2007",
                        "value": "18",
                        "color": "e4005f"
                    },
					{
                        "label": "2008",
                        "value": "15",
                        "color": "e4005f"
                    },
					{
                        "label": "2009",
                        "value": "16",
                        "color": "e4005f"
                    },
					{
                        "label": "2010",
                        "value": "21",
                        "color": "e4005f"
                    },
					{
                        "label": "2011",
                        "value": "18",
                        "color": "e4005f"
                    },
					{
                        "label": "2012",
                        "value": "15",
                        "color": "e4005f"
                    },
					{
                        "label": "2013",
                        "value": "16",
                        "color": "e4005f"
                    },
					{
                        "label": "2014",
                        "value": "13",
                        "color": "e4005f"
                    },
					{
                        "label": "2015",
                        "value": "8",
                        "color": "e4005f"
                    },
					{
                        "label": "2016",
                        "value": "17",
                        "color": "e4005f"
                    },
                ],
            }
        },
		
		//History Drilled Down
		
		{
            "id": "HistoryYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: History",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "5",
                        "color": "276a77"
                    },
                    {
                        "label": "1993",
                        "value": "8",
                        "color": "276a77"
                    },
					{
                        "label": "1994",
                        "value": "4",
                        "color": "276a77"
                    },
					{
                        "label": "1995",
                        "value": "8",
                        "color": "276a77"
                    },
					{
                        "label": "1996",
                        "value": "8",
                        "color": "276a77"
                    },
					{
                        "label": "1997",
                        "value": "8",
                        "color": "276a77"
                    },
					{
                        "label": "1998",
                        "value": "6",
                        "color": "276a77"
                    },
					{
                        "label": "1999",
                        "value": "9",
                        "color": "276a77"
                    },
					{
                        "label": "2000",
                        "value": "8",
                        "color": "276a77"
                    },
					{
                        "label": "2001",
                        "value": "7",
                        "color": "276a77"
                    },
					{
                        "label": "2002",
                        "value": "6",
                        "color": "276a77"
                    },
					{
                        "label": "2003",
                        "value": "11",
                        "color": "276a77"
                    },
					{
                        "label": "2004",
                        "value": "7",
                        "color": "276a77"
                    },
					{
                        "label": "2005",
                        "value": "9",
                        "color": "276a77"
                    },
					{
                        "label": "2006",
                        "value": "14",
                        "color": "276a77"
                    },
					{
                        "label": "2007",
                        "value": "7",
                        "color": "276a77"
                    },
					{
                        "label": "2008",
                        "value": "10",
                        "color": "276a77"
                    },
					{
                        "label": "2009",
                        "value": "2",
                        "color": "276a77"
                    },
					{
                        "label": "2010",
                        "value": "8",
                        "color": "276a77"
                    },
					{
                        "label": "2011",
                        "value": "4",
                        "color": "276a77"
                    },
					{
                        "label": "2012",
                        "value": "12",
                        "color": "276a77"
                    },
					{
                        "label": "2013",
                        "value": "11",
                        "color": "276a77"
                    },
					{
                        "label": "2014",
                        "value": "9",
                        "color": "276a77"
                    },
					{
                        "label": "2015",
                        "value": "12",
                        "color": "276a77"
                    },
					{
                        "label": "2016",
                        "value": "12",
                        "color": "276a77"
                    },
                ],
            }
        },
		
		//Horror Drilled Down
		
		{
            "id": "HorrorYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Horror",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "16",
                        "color": "03171c"
                    },
                    {
                        "label": "1993",
                        "value": "13",
                        "color": "03171c"
                    },
					{
                        "label": "1994",
                        "value": "11",
                        "color": "03171c"
                    },
					{
                        "label": "1995",
                        "value": "14",
                        "color": "03171c"
                    },
					{
                        "label": "1996",
                        "value": "13",
                        "color": "03171c"
                    },
					{
                        "label": "1997",
                        "value": "11",
                        "color": "03171c"
                    },
					{
                        "label": "1998",
                        "value": "16",
                        "color": "03171c"
                    },
					{
                        "label": "1999",
                        "value": "14",
                        "color": "03171c"
                    },
					{
                        "label": "2000",
                        "value": "15",
                        "color": "03171c"
                    },
					{
                        "label": "2001",
                        "value": "13",
                        "color": "03171c"
                    },
					{
                        "label": "2002",
                        "value": "16",
                        "color": "03171c"
                    },
					{
                        "label": "2003",
                        "value": "13",
                        "color": "03171c"
                    },
					{
                        "label": "2004",
                        "value": "16",
                        "color": "03171c"
                    },
					{
                        "label": "2005",
                        "value": "25",
                        "color": "03171c"
                    },
					{
                        "label": "2006",
                        "value": "23",
                        "color": "03171c"
                    },
					{
                        "label": "2007",
                        "value": "25",
                        "color": "03171c"
                    },
					{
                        "label": "2008",
                        "value": "13",
                        "color": "03171c"
                    },
					{
                        "label": "2009",
                        "value": "21",
                        "color": "03171c"
                    },
					{
                        "label": "2010",
                        "value": "16",
                        "color": "03171c"
                    },
					{
                        "label": "2011",
                        "value": "15",
                        "color": "03171c"
                    },
					{
                        "label": "2012",
                        "value": "17",
                        "color": "03171c"
                    },
					{
                        "label": "2013",
                        "value": "18",
                        "color": "03171c"
                    },
					{
                        "label": "2014",
                        "value": "18",
                        "color": "03171c"
                    },
					{
                        "label": "2015",
                        "value": "15",
                        "color": "03171c"
                    },
					{
                        "label": "2016",
                        "value": "27",
                        "color": "03171c"
                    },
                ],
            }
        },
		
		//Music Drilled Down
		
		{
            "id": "MusicYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Music",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "6",
                        "color": "98a2b7"
                    },
                    {
                        "label": "1993",
                        "value": "13",
                        "color": "98a2b7"
                    },
					{
                        "label": "1994",
                        "value": "7",
                        "color": "98a2b7"
                    },
					{
                        "label": "1995",
                        "value": "7",
                        "color": "98a2b7"
                    },
					{
                        "label": "1996",
                        "value": "7",
                        "color": "98a2b7"
                    },
					{
                        "label": "1997",
                        "value": "7",
                        "color": "98a2b7"
                    },
					{
                        "label": "1998",
                        "value": "15",
                        "color": "98a2b7"
                    },
					{
                        "label": "1999",
                        "value": "9",
                        "color": "98a2b7"
                    },
					{
                        "label": "2000",
                        "value": "11",
                        "color": "98a2b7"
                    },
					{
                        "label": "2001",
                        "value": "10",
                        "color": "98a2b7"
                    },
					{
                        "label": "2002",
                        "value": "9",
                        "color": "98a2b7"
                    },
					{
                        "label": "2003",
                        "value": "14",
                        "color": "98a2b7"
                    },
					{
                        "label": "2004",
                        "value": "13",
                        "color": "98a2b7"
                    },
					{
                        "label": "2005",
                        "value": "16",
                        "color": "98a2b7"
                    },
					{
                        "label": "2006",
                        "value": "11",
                        "color": "98a2b7"
                    },
					{
                        "label": "2007",
                        "value": "14",
                        "color": "98a2b7"
                    },
					{
                        "label": "2008",
                        "value": "14",
                        "color": "98a2b7"
                    },
					{
                        "label": "2009",
                        "value": "11",
                        "color": "98a2b7"
                    },
					{
                        "label": "2010",
                        "value": "9",
                        "color": "98a2b7"
                    },
					{
                        "label": "2011",
                        "value": "8",
                        "color": "98a2b7"
                    },
					{
                        "label": "2012",
                        "value": "12",
                        "color": "98a2b7"
                    },
					{
                        "label": "2013",
                        "value": "10",
                        "color": "98a2b7"
                    },
					{
                        "label": "2014",
                        "value": "11",
                        "color": "98a2b7"
                    },
					{
                        "label": "2015",
                        "value": "13",
                        "color": "98a2b7"
                    },
					{
                        "label": "2016",
                        "value": "4",
                        "color": "98a2b7"
                    },
                ],
            }
        },
		
		//Musical Drilled Down
		
		{
            "id": "MusicalYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Musical",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "1",
                        "color": "194f08"
                    },
                    {
                        "label": "1993",
                        "value": "2",
                        "color": "194f08"
                    },
					{
                        "label": "1994",
                        "value": "1",
                        "color": "194f08"
                    },
					{
                        "label": "1995",
                        "value": "0",
                        "color": "194f08"
                    },
					{
                        "label": "1996",
                        "value": "2",
                        "color": "194f08"
                    },
					{
                        "label": "1997",
                        "value": "2",
                        "color": "194f08"
                    },
					{
                        "label": "1998",
                        "value": "1",
                        "color": "194f08"
                    },
					{
                        "label": "1999",
                        "value": "1",
                        "color": "194f08"
                    },
					{
                        "label": "2000",
                        "value": "6",
                        "color": "194f08"
                    },
					{
                        "label": "2001",
                        "value": "3",
                        "color": "194f08"
                    },
					{
                        "label": "2002",
                        "value": "3",
                        "color": "194f08"
                    },
					{
                        "label": "2003",
                        "value": "6",
                        "color": "194f08"
                    },
					{
                        "label": "2004",
                        "value": "2",
                        "color": "194f08"
                    },
					{
                        "label": "2005",
                        "value": "6",
                        "color": "194f08"
                    },
					{
                        "label": "2006",
                        "value": "2",
                        "color": "194f08"
                    },
					{
                        "label": "2007",
                        "value": "5",
                        "color": "194f08"
                    },
					{
                        "label": "2008",
                        "value": "3",
                        "color": "194f08"
                    },
					{
                        "label": "2009",
                        "value": "3",
                        "color": "194f08"
                    },
					{
                        "label": "2010",
                        "value": "3",
                        "color": "194f08"
                    },
					{
                        "label": "2011",
                        "value": "1",
                        "color": "194f08"
                    },
					{
                        "label": "2012",
                        "value": "2",
                        "color": "194f08"
                    },
					{
                        "label": "2013",
                        "value": "3",
                        "color": "194f08"
                    },
					{
                        "label": "2014",
                        "value": "0",
                        "color": "194f08"
                    },
					{
                        "label": "2015",
                        "value": "1",
                        "color": "194f08"
                    },
					{
                        "label": "2016",
                        "value": "3",
                        "color": "194f08"
                    },
                ],
            }
        },
		
		//Mystery Drilled Down
		
		{
            "id": "MysteryYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Mystery",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "15",
                        "color": "fc0551"
                    },
                    {
                        "label": "1993",
                        "value": "14",
                        "color": "fc0551"
                    },
					{
                        "label": "1994",
                        "value": "14",
                        "color": "fc0551"
                    },
					{
                        "label": "1995",
                        "value": "16",
                        "color": "fc0551"
                    },
					{
                        "label": "1996",
                        "value": "15",
                        "color": "fc0551"
                    },
					{
                        "label": "1997",
                        "value": "20",
                        "color": "fc0551"
                    },
					{
                        "label": "1998",
                        "value": "18",
                        "color": "fc0551"
                    },
					{
                        "label": "1999",
                        "value": "20",
                        "color": "fc0551"
                    },
					{
                        "label": "2000",
                        "value": "17",
                        "color": "fc0551"
                    },
					{
                        "label": "2001",
                        "value": "24",
                        "color": "fc0551"
                    },
					{
                        "label": "2002",
                        "value": "23",
                        "color": "fc0551"
                    },
					{
                        "label": "2003",
                        "value": "18",
                        "color": "fc0551"
                    },
					{
                        "label": "2004",
                        "value": "22",
                        "color": "fc0551"
                    },
					{
                        "label": "2005",
                        "value": "21",
                        "color": "fc0551"
                    },
					{
                        "label": "2006",
                        "value": "20",
                        "color": "fc0551"
                    },
					{
                        "label": "2007",
                        "value": "21",
                        "color": "fc0551"
                    },
					{
                        "label": "2008",
                        "value": "16",
                        "color": "fc0551"
                    },
					{
                        "label": "2009",
                        "value": "29",
                        "color": "fc0551"
                    },
					{
                        "label": "2010",
                        "value": "15",
                        "color": "fc0551"
                    },
					{
                        "label": "2011",
                        "value": "20",
                        "color": "fc0551"
                    },
					{
                        "label": "2012",
                        "value": "14",
                        "color": "fc0551"
                    },
					{
                        "label": "2013",
                        "value": "13",
                        "color": "fc0551"
                    },
					{
                        "label": "2014",
                        "value": "20",
                        "color": "fc0551"
                    },
					{
                        "label": "2015",
                        "value": "14",
                        "color": "fc0551"
                    },
					{
                        "label": "2016",
                        "value": "13",
                        "color": "fc0551"
                    },
                ],
            }
        },
		
		//Romance Drilled Down
		
		{
            "id": "RomanceYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Romance",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "55",
                        "color": "7f7494"
                    },
                    {
                        "label": "1993",
                        "value": "52",
                        "color": "7f7494"
                    },
					{
                        "label": "1994",
                        "value": "58",
                        "color": "7f7494"
                    },
					{
                        "label": "1995",
                        "value": "55",
                        "color": "7f7494"
                    },
					{
                        "label": "1996",
                        "value": "57",
                        "color": "7f7494"
                    },
					{
                        "label": "1997",
                        "value": "58",
                        "color": "7f7494"
                    },
					{
                        "label": "1998",
                        "value": "58",
                        "color": "7f7494"
                    },
					{
                        "label": "1999",
                        "value": "65",
                        "color": "7f7494"
                    },
					{
                        "label": "2000",
                        "value": "76",
                        "color": "7f7494"
                    },
					{
                        "label": "2001",
                        "value": "74",
                        "color": "7f7494"
                    },
					{
                        "label": "2002",
                        "value": "62",
                        "color": "7f7494"
                    },
					{
                        "label": "2003",
                        "value": "54",
                        "color": "7f7494"
                    },
					{
                        "label": "2004",
                        "value": "67",
                        "color": "7f7494"
                    },
					{
                        "label": "2005",
                        "value": "49",
                        "color": "7f7494"
                    },
					{
                        "label": "2006",
                        "value": "48",
                        "color": "7f7494"
                    },
					{
                        "label": "2007",
                        "value": "53",
                        "color": "7f7494"
                    },
					{
                        "label": "2008",
                        "value": "52",
                        "color": "7f7494"
                    },
					{
                        "label": "2009",
                        "value": "56",
                        "color": "7f7494"
                    },
					{
                        "label": "2010",
                        "value": "57",
                        "color": "7f7494"
                    },
					{
                        "label": "2011",
                        "value": "45",
                        "color": "7f7494"
                    },
					{
                        "label": "2012",
                        "value": "42",
                        "color": "7f7494"
                    },
					{
                        "label": "2013",
                        "value": "42",
                        "color": "7f7494"
                    },
					{
                        "label": "2014",
                        "value": "45",
                        "color": "7f7494"
                    },
					{
                        "label": "2015",
                        "value": "26",
                        "color": "7f7494"
                    },
					{
                        "label": "2016",
                        "value": "32",
                        "color": "7f7494"
                    },
                ],
            }
        },
		
		//Sci-Fi Drilled Down
		
		{
            "id": "Sci-FiYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Sci-Fi",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "9",
                        "color": "789266"
                    },
                    {
                        "label": "1993",
                        "value": "9",
                        "color": "789266"
                    },
					{
                        "label": "1994",
                        "value": "6",
                        "color": "789266"
                    },
					{
                        "label": "1995",
                        "value": "10",
                        "color": "789266"
                    },
					{
                        "label": "1996",
                        "value": "14",
                        "color": "789266"
                    },
					{
                        "label": "1997",
                        "value": "20",
                        "color": "789266"
                    },
					{
                        "label": "1998",
                        "value": "12",
                        "color": "789266"
                    },
					{
                        "label": "1999",
                        "value": "14",
                        "color": "789266"
                    },
					{
                        "label": "2000",
                        "value": "13",
                        "color": "789266"
                    },
					{
                        "label": "2001",
                        "value": "12",
                        "color": "789266"
                    },
					{
                        "label": "2002",
                        "value": "13",
                        "color": "789266"
                    },
					{
                        "label": "2003",
                        "value": "9",
                        "color": "789266"
                    },
					{
                        "label": "2004",
                        "value": "14",
                        "color": "789266"
                    },
					{
                        "label": "2005",
                        "value": "6",
                        "color": "789266"
                    },
					{
                        "label": "2006",
                        "value": "10",
                        "color": "789266"
                    },
					{
                        "label": "2007",
                        "value": "9",
                        "color": "789266"
                    },
					{
                        "label": "2008",
                        "value": "14",
                        "color": "789266"
                    },
					{
                        "label": "2009",
                        "value": "16",
                        "color": "789266"
                    },
					{
                        "label": "2010",
                        "value": "8",
                        "color": "789266"
                    },
					{
                        "label": "2011",
                        "value": "21",
                        "color": "789266"
                    },
					{
                        "label": "2012",
                        "value": "12",
                        "color": "789266"
                    },
					{
                        "label": "2013",
                        "value": "19",
                        "color": "789266"
                    },
					{
                        "label": "2014",
                        "value": "21",
                        "color": "789266"
                    },
					{
                        "label": "2015",
                        "value": "18",
                        "color": "789266"
                    },
					{
                        "label": "2016",
                        "value": "11",
                        "color": "789266"
                    },
                ],
            }
        },
		
		//Short Drilled Down
		
		{
            "id": "ShortYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Short",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "0",
                        "color": "42398a"
                    },
                    {
                        "label": "1993",
                        "value": "0",
                        "color": "42398a"
                    },
					{
                        "label": "1994",
                        "value": "0",
                        "color": "42398a"
                    },
					{
                        "label": "1995",
                        "value": "0",
                        "color": "42398a"
                    },
					{
                        "label": "1996",
                        "value": "0",
                        "color": "42398a"
                    },
					{
                        "label": "1997",
                        "value": "3",
                        "color": "42398a"
                    },
					{
                        "label": "1998",
                        "value": "2",
                        "color": "42398a"
                    },
					{
                        "label": "1999",
                        "value": "7",
                        "color": "42398a"
                    },
					{
                        "label": "2000",
                        "value": "2",
                        "color": "42398a"
                    },
					{
                        "label": "2001",
                        "value": "1",
                        "color": "42398a"
                    },
					{
                        "label": "2002",
                        "value": "4",
                        "color": "42398a"
                    },
					{
                        "label": "2003",
                        "value": "0",
                        "color": "42398a"
                    },
					{
                        "label": "2004",
                        "value": "1",
                        "color": "42398a"
                    },
					{
                        "label": "2005",
                        "value": "2",
                        "color": "42398a"
                    },
					{
                        "label": "2006",
                        "value": "2",
                        "color": "42398a"
                    },
					{
                        "label": "2007",
                        "value": "1",
                        "color": "42398a"
                    },
					{
                        "label": "2008",
                        "value": "1",
                        "color": "42398a"
                    },
					{
                        "label": "2009",
                        "value": "1",
                        "color": "42398a"
                    },
					{
                        "label": "2010",
                        "value": "0",
                        "color": "42398a"
                    },
					{
                        "label": "2011",
                        "value": "2",
                        "color": "42398a"
                    },
					{
                        "label": "2012",
                        "value": "1",
                        "color": "42398a"
                    },
					{
                        "label": "2013",
                        "value": "0",
                        "color": "42398a"
                    },
					{
                        "label": "2014",
                        "value": "2",
                        "color": "42398a"
                    },
					{
                        "label": "2015",
                        "value": "0",
                        "color": "42398a"
                    },
					{
                        "label": "2016",
                        "value": "1",
                        "color": "42398a"
                    },
                ],
            }
        },
		
		//Sport Drilled Down
		
		{
            "id": "SportYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Sport",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "8",
                        "color": "b883ab"
                    },
                    {
                        "label": "1993",
                        "value": "4",
                        "color": "b883ab"
                    },
					{
                        "label": "1994",
                        "value": "11",
                        "color": "b883ab"
                    },
					{
                        "label": "1995",
                        "value": "1",
                        "color": "b883ab"
                    },
					{
                        "label": "1996",
                        "value": "11",
                        "color": "b883ab"
                    },
					{
                        "label": "1997",
                        "value": "3",
                        "color": "b883ab"
                    },
					{
                        "label": "1998",
                        "value": "11",
                        "color": "b883ab"
                    },
					{
                        "label": "1999",
                        "value": "8",
                        "color": "b883ab"
                    },
					{
                        "label": "2000",
                        "value": "11",
                        "color": "b883ab"
                    },
					{
                        "label": "2001",
                        "value": "9",
                        "color": "b883ab"
                    },
					{
                        "label": "2002",
                        "value": "5",
                        "color": "b883ab"
                    },
					{
                        "label": "2003",
                        "value": "4",
                        "color": "b883ab"
                    },
					{
                        "label": "2004",
                        "value": "8",
                        "color": "b883ab"
                    },
					{
                        "label": "2005",
                        "value": "14",
                        "color": "b883ab"
                    },
					{
                        "label": "2006",
                        "value": "14",
                        "color": "b883ab"
                    },
					{
                        "label": "2007",
                        "value": "15",
                        "color": "b883ab"
                    },
					{
                        "label": "2008",
                        "value": "11",
                        "color": "b883ab"
                    },
					{
                        "label": "2009",
                        "value": "6",
                        "color": "b883ab"
                    },
					{
                        "label": "2010",
                        "value": "4",
                        "color": "b883ab"
                    },
					{
                        "label": "2011",
                        "value": "5",
                        "color": "b883ab"
                    },
					{
                        "label": "2012",
                        "value": "5",
                        "color": "b883ab"
                    },
					{
                        "label": "2013",
                        "value": "6",
                        "color": "b883ab"
                    },
					{
                        "label": "2014",
                        "value": "8",
                        "color": "b883ab"
                    },
					{
                        "label": "2015",
                        "value": "7",
                        "color": "b883ab"
                    },
					{
                        "label": "2016",
                        "value": "5",
                        "color": "b883ab"
                    },
                ],
            }
        },
		
		//Thriller Drilled Down
		
		{
            "id": "ThrillerYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Thriller",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "33",
                        "color": "6baa01"
                    },
                    {
                        "label": "1993",
                        "value": "34",
                        "color": "6baa01"
                    },
					{
                        "label": "1994",
                        "value": "18",
                        "color": "6baa01"
                    },
					{
                        "label": "1995",
                        "value": "30",
                        "color": "6baa01"
                    },
					{
                        "label": "1996",
                        "value": "32",
                        "color": "6baa01"
                    },
					{
                        "label": "1997",
                        "value": "32",
                        "color": "6baa01"
                    },
					{
                        "label": "1998",
                        "value": "27",
                        "color": "6baa01"
                    },
					{
                        "label": "1999",
                        "value": "33",
                        "color": "6baa01"
                    },
					{
                        "label": "2000",
                        "value": "28",
                        "color": "6baa01"
                    },
					{
                        "label": "2001",
                        "value": "28",
                        "color": "6baa01"
                    },
					{
                        "label": "2002",
                        "value": "38",
                        "color": "6baa01"
                    },
					{
                        "label": "2003",
                        "value": "29",
                        "color": "6baa01"
                    },
					{
                        "label": "2004",
                        "value": "27",
                        "color": "6baa01"
                    },
					{
                        "label": "2005",
                        "value": "29",
                        "color": "6baa01"
                    },
					{
                        "label": "2006",
                        "value": "34",
                        "color": "6baa01"
                    },
					{
                        "label": "2007",
                        "value": "45",
                        "color": "6baa01"
                    },
					{
                        "label": "2008",
                        "value": "22",
                        "color": "6baa01"
                    },
					{
                        "label": "2009",
                        "value": "29",
                        "color": "6baa01"
                    },
					{
                        "label": "2010",
                        "value": "27",
                        "color": "6baa01"
                    },
					{
                        "label": "2011",
                        "value": "37",
                        "color": "6baa01"
                    },
					{
                        "label": "2012",
                        "value": "36",
                        "color": "6baa01"
                    },
					{
                        "label": "2013",
                        "value": "37",
                        "color": "6baa01"
                    },
					{
                        "label": "2014",
                        "value": "34",
                        "color": "6baa01"
                    },
					{
                        "label": "2015",
                        "value": "33",
                        "color": "6baa01"
                    },
					{
                        "label": "2016",
                        "value": "32",
                        "color": "6baa01"
                    },
                ],
            }
        },
		
		//War Drilled Down
		
		{
            "id": "WarYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: War",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "3",
                        "color": "7ce806"
                    },
                    {
                        "label": "1993",
                        "value": "2",
                        "color": "7ce806"
                    },
					{
                        "label": "1994",
                        "value": "5",
                        "color": "7ce806"
                    },
					{
                        "label": "1995",
                        "value": "4",
                        "color": "7ce806"
                    },
					{
                        "label": "1996",
                        "value": "3",
                        "color": "7ce806"
                    },
					{
                        "label": "1997",
                        "value": "5",
                        "color": "7ce806"
                    },
					{
                        "label": "1998",
                        "value": "4",
                        "color": "7ce806"
                    },
					{
                        "label": "1999",
                        "value": "6",
                        "color": "7ce806"
                    },
					{
                        "label": "2000",
                        "value": "6",
                        "color": "7ce806"
                    },
					{
                        "label": "2001",
                        "value": "4",
                        "color": "7ce806"
                    },
					{
                        "label": "2002",
                        "value": "9",
                        "color": "7ce806"
                    },
					{
                        "label": "2003",
                        "value": "4",
                        "color": "7ce806"
                    },
					{
                        "label": "2004",
                        "value": "10",
                        "color": "7ce806"
                    },
					{
                        "label": "2005",
                        "value": "3",
                        "color": "7ce806"
                    },
					{
                        "label": "2006",
                        "value": "5",
                        "color": "7ce806"
                    },
					{
                        "label": "2007",
                        "value": "3",
                        "color": "7ce806"
                    },
					{
                        "label": "2008",
                        "value": "6",
                        "color": "7ce806"
                    },
					{
                        "label": "2009",
                        "value": "4",
                        "color": "7ce806"
                    },
					{
                        "label": "2010",
                        "value": "4",
                        "color": "7ce806"
                    },
					{
                        "label": "2011",
                        "value": "4",
                        "color": "7ce806"
                    },
					{
                        "label": "2012",
                        "value": "2",
                        "color": "7ce806"
                    },
					{
                        "label": "2013",
                        "value": "2",
                        "color": "7ce806"
                    },
					{
                        "label": "2014",
                        "value": "5",
                        "color": "7ce806"
                    },
					{
                        "label": "2015",
                        "value": "5",
                        "color": "7ce806"
                    },
					{
                        "label": "2016",
                        "value": "2",
                        "color": "7ce806"
                    },
                ],
            }
        },
		
		//Western Drilled Down
		
		{
            "id": "WesternYears",
            "linkedchart": {
                "chart": {
                    "caption": "Number of Movies Per Year: Western",
                    //"subcaption": "Click on a column to drill-down",
                    "yaxisname": "Number of Movies",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    //"numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [
                    {
                        "label": "1992",
                        "value": "1",
                        "color": "086c45"
                    },
                    {
                        "label": "1993",
                        "value": "4",
                        "color": "086c45"
                    },
					{
                        "label": "1994",
                        "value": "4",
                        "color": "086c45"
                    },
					{
                        "label": "1995",
                        "value": "3",
                        "color": "086c45"
                    },
					{
                        "label": "1996",
                        "value": "0",
                        "color": "086c45"
                    },
					{
                        "label": "1997",
                        "value": "0",
                        "color": "086c45"
                    },
					{
                        "label": "1998",
                        "value": "2",
                        "color": "086c45"
                    },
					{
                        "label": "1999",
                        "value": "1",
                        "color": "086c45"
                    },
					{
                        "label": "2000",
                        "value": "2",
                        "color": "086c45"
                    },
					{
                        "label": "2001",
                        "value": "1",
                        "color": "086c45"
                    },
					{
                        "label": "2002",
                        "value": "0",
                        "color": "086c45"
                    },
					{
                        "label": "2003",
                        "value": "2",
                        "color": "086c45"
                    },
					{
                        "label": "2004",
                        "value": "0",
                        "color": "086c45"
                    },
					{
                        "label": "2005",
                        "value": "3",
                        "color": "086c45"
                    },
					{
                        "label": "2006",
                        "value": "1",
                        "color": "086c45"
                    },
					{
                        "label": "2007",
                        "value": "0",
                        "color": "086c45"
                    },
					{
                        "label": "2008",
                        "value": "0",
                        "color": "086c45"
                    },
					{
                        "label": "2009",
                        "value": "0",
                        "color": "086c45"
                    },
					{
                        "label": "2010",
                        "value": "3",
                        "color": "086c45"
                    },
					{
                        "label": "2011",
                        "value": "1",
                        "color": "086c45"
                    },
					{
                        "label": "2012",
                        "value": "2",
                        "color": "086c45"
                    },
					{
                        "label": "2013",
                        "value": "1",
                        "color": "086c45"
                    },
					{
                        "label": "2014",
                        "value": "0",
                        "color": "086c45"
                    },
					{
                        "label": "2015",
                        "value": "2",
                        "color": "086c45"
                    },
					{
                        "label": "2016",
                        "value": "2",
                        "color": "086c45"
                    },
                ],
            }
        },
    ]},

}
);
    fusioncharts.render();
});