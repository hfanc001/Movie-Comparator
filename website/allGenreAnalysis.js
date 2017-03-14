
  FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'pie3d',
    renderAt: 'MultiPieChartGenre',
    id: "myChart",
    width: "700",
    height: "500",
    dataFormat: 'json',
    dataSource: {
        "chart": {
        "caption": "Analysis of All Genres Per Year",
        "subCaption": "1992 - 2016",
        "paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
        "bgColor": "#ffffff",
        "showBorder": "0",
        "use3DLighting": "0",
        "showShadow": "0",
        "enableSmartLabels": "0",
        "startingAngle": "0",
        "showPercentValues": "1",
        "showPercentInTooltip": "0",
        "decimals": "1",
        "captionFontSize": "14",
        "subcaptionFontSize": "14",
        "subcaptionFontBold": "0",
        "toolTipColor": "#ffffff",
        "toolTipBorderThickness": "0",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "80",
        "toolTipBorderRadius": "2",
        "toolTipPadding": "5",
        "showHoverEffect": "1",
        "showLegend": "1",
        "legendBgColor": "#ffffff",
        "legendBorderAlpha": "0",
        "legendShadow": "0",
        "legendItemFontSize": "10",
        "legendItemFontColor": "#666666",
        "useDataPlotColorForLabels": "1"
    },
    "data": [
        {
            "label": "1992",
            "value": "571",
			"link": "newchart-xml-Year1992"
        },
        {
            "label": "1993",
            "value": "585",
			"link": "newchart-xml-Year1993"
        },
        {
            "label": "1994",
            "value": "615",
			"link": "newchart-xml-Year1994"
        },
        {
            "label": "1995",
            "value": "597",
			"link": "newchart-xml-Year1995"
        },
		{
            "label": "1996",
            "value": "593",
			"link": "newchart-xml-Year1996"
        },
		{
            "label": "1997",
            "value": "608",
			"link": "newchart-xml-Year1997"
        },
		{
            "label": "1998",
            "value": "600",
			"link": "newchart-xml-Year1998"
        },
		{
            "label": "1999",
            "value": "604",
			"link": "newchart-xml-Year1999"
        },
		{
            "label": "2000",
            "value": "625",
			"link": "newchart-xml-Year2000"
        },
		{
            "label": "2001",
            "value": "618",
			"link": "newchart-xml-Year2001"
        },
		{
            "label": "2002",
            "value": "632",
			"link": "newchart-xml-Year2002"
        },
		{
            "label": "2003",
            "value": "621",
			"link": "newchart-xml-Year2003"
        },
		{
            "label": "2004",
            "value": "627",
			"link": "newchart-xml-Year2004"
        },
		{
            "label": "2005",
            "value": "641",
			"link": "newchart-xml-Year2005"
        },
		{
            "label": "2006",
            "value": "626",
			"link": "newchart-xml-Year2006"
        },
		{
            "label": "2007",
            "value": "636",
			"link": "newchart-xml-Year2007"
        },
		{
            "label": "2008",
            "value": "616",
			"link": "newchart-xml-Year2008"
        },
		{
            "label": "2009",
            "value": "610",
			"link": "newchart-xml-Year2009"
        },
		{
            "label": "2010",
            "value": "618",
			"link": "newchart-xml-Year2010"
        },
		{
            "label": "2011",
            "value": "619",
			"link": "newchart-xml-Year2011"
        },
		{
            "label": "2012",
            "value": "575",
			"link": "newchart-xml-Year2012"
        },
		{
            "label": "2013",
            "value": "597",
			"link": "newchart-xml-Year2013"
        },
		{
            "label": "2014",
            "value": "612",
			"link": "newchart-xml-Year2014"
        },
		{
            "label": "2015",
            "value": "603",
			"link": "newchart-xml-Year2015"
        },
		{
            "label": "2016",
            "value": "610",
			"link": "newchart-xml-Year2016"
        },
    ],
	
	
	"linkeddata": [
		//Year1992 Drill Down
		{
            "id": "Year1992",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 1992",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "36",
                    },
                    {
                        "label": "Adveture",
                        "value": "24",
                    },
					{
                        "label": "Animation",
                        "value": "7",
                    },
					{
                        "label": "Biography",
                        "value": "14",
                    },
					{
                        "label": "Comedy",
                        "value": "95",
                    },
					{
                        "label": "Crime",
                        "value": "53",
                    },
					{
                        "label": "Documentary",
                        "value": "5",
                    },
					{
                        "label": "Drama",
                        "value": "157",
                    },
					{
                        "label": "Family",
                        "value": "14",
                    },
					{
                        "label": "Fantasy",
                        "value": "14",
                    },
					{
                        "label": "History",
                        "value": "5",
                    },
					{
                        "label": "Horror",
                        "value": "16",
                    },
					{
                        "label": "Music",
                        "value": "6",
                    },
					{
                        "label": "Musical",
                        "value": "1",
                    },
					{
                        "label": "Mystery",
                        "value": "15",
                    },
					{
                        "label": "Romance",
                        "value": "55",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "9",
                    },
					{
                        "label": "Short",
                        "value": "0",
                    },
					{
                        "label": "Sport",
                        "value": "8",
                    },
					{
                        "label": "Thriller",
                        "value": "33",
                    },
					{
                        "label": "War",
                        "value": "3",
                    },
					{
                        "label": "Western",
                        "value": "1",
                    },
                ],
            }
        },
		
		//Year1993 Drill Down	
		{
            "id": "Year1993",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 1993",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "37",
                    },
                    {
                        "label": "Adveture",
                        "value": "22",
                    },
					{
                        "label": "Animation",
                        "value": "5",
                    },
					{
                        "label": "Biography",
                        "value": "19",
                    },
					{
                        "label": "Comedy",
                        "value": "98",
                    },
					{
                        "label": "Crime",
                        "value": "47",
                    },
					{
                        "label": "Documentary",
                        "value": "6",
                    },
					{
                        "label": "Drama",
                        "value": "153",
                    },
					{
                        "label": "Family",
                        "value": "22",
                    },
					{
                        "label": "Fantasy",
                        "value": "21",
                    },
					{
                        "label": "History",
                        "value": "8",
                    },
					{
                        "label": "Horror",
                        "value": "13",
                    },
					{
                        "label": "Music",
                        "value": "13",
                    },
					{
                        "label": "Musical",
                        "value": "2",
                    },
					{
                        "label": "Mystery",
                        "value": "14",
                    },
					{
                        "label": "Romance",
                        "value": "52",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "9",
                    },
					{
                        "label": "Short",
                        "value": "0",
                    },
					{
                        "label": "Sport",
                        "value": "4",
                    },
					{
                        "label": "Thriller",
                        "value": "34",
                    },
					{
                        "label": "War",
                        "value": "2",
                    },
					{
                        "label": "Western",
                        "value": "4",
                    },
                ],
            }
        },
	
		//Year1994 Drill Down
		{
            "id": "Year1994",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 1994",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "34",
                    },
                    {
                        "label": "Adveture",
                        "value": "36",
                    },
					{
                        "label": "Animation",
                        "value": "6",
                    },
					{
                        "label": "Biography",
                        "value": "18",
                    },
					{
                        "label": "Comedy",
                        "value": "135",
                    },
					{
                        "label": "Crime",
                        "value": "55",
                    },
					{
                        "label": "Documentary",
                        "value": "8",
                    },
					{
                        "label": "Drama",
                        "value": "139",
                    },
					{
                        "label": "Family",
                        "value": "30",
                    },
					{
                        "label": "Fantasy",
                        "value": "15",
                    },
					{
                        "label": "History",
                        "value": "4",
                    },
					{
                        "label": "Horror",
                        "value": "11",
                    },
					{
                        "label": "Music",
                        "value": "7",
                    },
					{
                        "label": "Musical",
                        "value": "1",
                    },
					{
                        "label": "Mystery",
                        "value": "14",
                    },
					{
                        "label": "Romance",
                        "value": "58",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "6",
                    },
					{
                        "label": "Short",
                        "value": "0",
                    },
					{
                        "label": "Sport",
                        "value": "11",
                    },
					{
                        "label": "Thriller",
                        "value": "18",
                    },
					{
                        "label": "War",
                        "value": "5",
                    },
					{
                        "label": "Western",
                        "value": "4",
                    },
                ],
            }
        },
		
		//Year1995 Drill Down
		{
            "id": "Year1995",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 1995",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "43",
                    },
                    {
                        "label": "Adveture",
                        "value": "35",
                    },
					{
                        "label": "Animation",
                        "value": "5",
                    },
					{
                        "label": "Biography",
                        "value": "13",
                    },
					{
                        "label": "Comedy",
                        "value": "105",
                    },
					{
                        "label": "Crime",
                        "value": "50",
                    },
					{
                        "label": "Documentary",
                        "value": "8",
                    },
					{
                        "label": "Drama",
                        "value": "146",
                    },
					{
                        "label": "Family",
                        "value": "25",
                    },
					{
                        "label": "Fantasy",
                        "value": "19",
                    },
					{
                        "label": "History",
                        "value": "8",
                    },
					{
                        "label": "Horror",
                        "value": "14",
                    },
					{
                        "label": "Music",
                        "value": "7",
                    },
					{
                        "label": "Musical",
                        "value": "0",
                    },
					{
                        "label": "Mystery",
                        "value": "16",
                    },
					{
                        "label": "Romance",
                        "value": "55",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "10",
                    },
					{
                        "label": "Short",
                        "value": "0",
                    },
					{
                        "label": "Sport",
                        "value": "1",
                    },
					{
                        "label": "Thriller",
                        "value": "30",
                    },
					{
                        "label": "War",
                        "value": "4",
                    },
					{
                        "label": "Western",
                        "value": "3",
                    },
                ],
            }
        },
		
		//Year1996 Drill Down
		{
            "id": "Year1996",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 1996",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "37",
                    },
                    {
                        "label": "Adveture",
                        "value": "32",
                    },
					{
                        "label": "Animation",
                        "value": "7",
                    },
					{
                        "label": "Biography",
                        "value": "9",
                    },
					{
                        "label": "Comedy",
                        "value": "113",
                    },
					{
                        "label": "Crime",
                        "value": "42",
                    },
					{
                        "label": "Documentary",
                        "value": "6",
                    },
					{
                        "label": "Drama",
                        "value": "147",
                    },
					{
                        "label": "Family",
                        "value": "22",
                    },
					{
                        "label": "Fantasy",
                        "value": "16",
                    },
					{
                        "label": "History",
                        "value": "8",
                    },
					{
                        "label": "Horror",
                        "value": "13",
                    },
					{
                        "label": "Music",
                        "value": "7",
                    },
					{
                        "label": "Musical",
                        "value": "2",
                    },
					{
                        "label": "Mystery",
                        "value": "15",
                    },
					{
                        "label": "Romance",
                        "value": "57",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "14",
                    },
					{
                        "label": "Short",
                        "value": "0",
                    },
					{
                        "label": "Sport",
                        "value": "11",
                    },
					{
                        "label": "Thriller",
                        "value": "32",
                    },
					{
                        "label": "War",
                        "value": "3",
                    },
					{
                        "label": "Western",
                        "value": "0",
                    },
                ],
            }
        },
		
		//Year1997 Drill Down
		{
            "id": "Year1997",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 1997",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "55",
                    },
                    {
                        "label": "Adveture",
                        "value": "35",
                    },
					{
                        "label": "Animation",
                        "value": "6",
                    },
					{
                        "label": "Biography",
                        "value": "11",
                    },
					{
                        "label": "Comedy",
                        "value": "104",
                    },
					{
                        "label": "Crime",
                        "value": "47",
                    },
					{
                        "label": "Documentary",
                        "value": "8",
                    },
					{
                        "label": "Drama",
                        "value": "136",
                    },
					{
                        "label": "Family",
                        "value": "23",
                    },
					{
                        "label": "Fantasy",
                        "value": "14",
                    },
					{
                        "label": "History",
                        "value": "8",
                    },
					{
                        "label": "Horror",
                        "value": "11",
                    },
					{
                        "label": "Music",
                        "value": "7",
                    },
					{
                        "label": "Musical",
                        "value": "2",
                    },
					{
                        "label": "Mystery",
                        "value": "20",
                    },
					{
                        "label": "Romance",
                        "value": "58",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "20",
                    },
					{
                        "label": "Short",
                        "value": "3",
                    },
					{
                        "label": "Sport",
                        "value": "3",
                    },
					{
                        "label": "Thriller",
                        "value": "32",
                    },
					{
                        "label": "War",
                        "value": "5",
                    },
					{
                        "label": "Western",
                        "value": "0",
                    },
                ],
            }
        },
		
		//Year1998 Drill Down
		{
            "id": "Year1998",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 1998",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "41",
                    },
                    {
                        "label": "Adveture",
                        "value": "29",
                    },
					{
                        "label": "Animation",
                        "value": "7",
                    },
					{
                        "label": "Biography",
                        "value": "13",
                    },
					{
                        "label": "Comedy",
                        "value": "108",
                    },
					{
                        "label": "Crime",
                        "value": "46",
                    },
					{
                        "label": "Documentary",
                        "value": "12",
                    },
					{
                        "label": "Drama",
                        "value": "146",
                    },
					{
                        "label": "Family",
                        "value": "16",
                    },
					{
                        "label": "Fantasy",
                        "value": "10",
                    },
					{
                        "label": "History",
                        "value": "6",
                    },
					{
                        "label": "Horror",
                        "value": "16",
                    },
					{
                        "label": "Music",
                        "value": "15",
                    },
					{
                        "label": "Musical",
                        "value": "1",
                    },
					{
                        "label": "Mystery",
                        "value": "18",
                    },
					{
                        "label": "Romance",
                        "value": "58",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "12",
                    },
					{
                        "label": "Short",
                        "value": "2",
                    },
					{
                        "label": "Sport",
                        "value": "11",
                    },
					{
                        "label": "Thriller",
                        "value": "27",
                    },
					{
                        "label": "War",
                        "value": "4",
                    },
					{
                        "label": "Western",
                        "value": "2",
                    },
                ],
            }
        },
		
		//Year1999 Drill Down
		{
            "id": "Year1999",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 1999",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "29",
                    },
                    {
                        "label": "Adveture",
                        "value": "25",
                    },
					{
                        "label": "Animation",
                        "value": "9",
                    },
					{
                        "label": "Biography",
                        "value": "17",
                    },
					{
                        "label": "Comedy",
                        "value": "112",
                    },
					{
                        "label": "Crime",
                        "value": "32",
                    },
					{
                        "label": "Documentary",
                        "value": "16",
                    },
					{
                        "label": "Drama",
                        "value": "145",
                    },
					{
                        "label": "Family",
                        "value": "16",
                    },
					{
                        "label": "Fantasy",
                        "value": "16",
                    },
					{
                        "label": "History",
                        "value": "9",
                    },
					{
                        "label": "Horror",
                        "value": "14",
                    },
					{
                        "label": "Music",
                        "value": "9",
                    },
					{
                        "label": "Musical",
                        "value": "1",
                    },
					{
                        "label": "Mystery",
                        "value": "20",
                    },
					{
                        "label": "Romance",
                        "value": "65",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "14",
                    },
					{
                        "label": "Short",
                        "value": "7",
                    },
					{
                        "label": "Sport",
                        "value": "8",
                    },
					{
                        "label": "Thriller",
                        "value": "33",
                    },
					{
                        "label": "War",
                        "value": "6",
                    },
					{
                        "label": "Western",
                        "value": "1",
                    },
                ],
            }
        },
		
		//Year2000 Drill Down
		{
            "id": "Year2000",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2000",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "37",
                    },
                    {
                        "label": "Adveture",
                        "value": "35",
                    },
					{
                        "label": "Animation",
                        "value": "10",
                    },
					{
                        "label": "Biography",
                        "value": "10",
                    },
					{
                        "label": "Comedy",
                        "value": "108",
                    },
					{
                        "label": "Crime",
                        "value": "43",
                    },
					{
                        "label": "Documentary",
                        "value": "14",
                    },
					{
                        "label": "Drama",
                        "value": "145",
                    },
					{
                        "label": "Family",
                        "value": "12",
                    },
					{
                        "label": "Fantasy",
                        "value": "16",
                    },
					{
                        "label": "History",
                        "value": "8",
                    },
					{
                        "label": "Horror",
                        "value": "15",
                    },
					{
                        "label": "Music",
                        "value": "11",
                    },
					{
                        "label": "Musical",
                        "value": "6",
                    },
					{
                        "label": "Mystery",
                        "value": "17",
                    },
					{
                        "label": "Romance",
                        "value": "76",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "13",
                    },
					{
                        "label": "Short",
                        "value": "2",
                    },
					{
                        "label": "Sport",
                        "value": "11",
                    },
					{
                        "label": "Thriller",
                        "value": "28",
                    },
					{
                        "label": "War",
                        "value": "6",
                    },
					{
                        "label": "Western",
                        "value": "2",
                    },
                ],
            }
        },
		
		//Year2001 Drill Down
		{
            "id": "Year2001",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2001",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "40",
                    },
                    {
                        "label": "Adveture",
                        "value": "32",
                    },
					{
                        "label": "Animation",
                        "value": "13",
                    },
					{
                        "label": "Biography",
                        "value": "11",
                    },
					{
                        "label": "Comedy",
                        "value": "109",
                    },
					{
                        "label": "Crime",
                        "value": "51",
                    },
					{
                        "label": "Documentary",
                        "value": "6",
                    },
					{
                        "label": "Drama",
                        "value": "144",
                    },
					{
                        "label": "Family",
                        "value": "10",
                    },
					{
                        "label": "Fantasy",
                        "value": "16",
                    },
					{
                        "label": "History",
                        "value": "7",
                    },
					{
                        "label": "Horror",
                        "value": "13",
                    },
					{
                        "label": "Music",
                        "value": "10",
                    },
					{
                        "label": "Musical",
                        "value": "3",
                    },
					{
                        "label": "Mystery",
                        "value": "24",
                    },
					{
                        "label": "Romance",
                        "value": "74",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "12",
                    },
					{
                        "label": "Short",
                        "value": "1",
                    },
					{
                        "label": "Sport",
                        "value": "9",
                    },
					{
                        "label": "Thriller",
                        "value": "28",
                    },
					{
                        "label": "War",
                        "value": "4",
                    },
					{
                        "label": "Western",
                        "value": "1",
                    },
                ],
            }
        },
		
		//Year2002 Drill Down
		{
            "id": "Year2002",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2002",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "48",
                    },
                    {
                        "label": "Adveture",
                        "value": "35",
                    },
					{
                        "label": "Animation",
                        "value": "13",
                    },
					{
                        "label": "Biography",
                        "value": "12",
                    },
					{
                        "label": "Comedy",
                        "value": "99",
                    },
					{
                        "label": "Crime",
                        "value": "51",
                    },
					{
                        "label": "Documentary",
                        "value": "20",
                    },
					{
                        "label": "Drama",
                        "value": "137",
                    },
					{
                        "label": "Family",
                        "value": "18",
                    },
					{
                        "label": "Fantasy",
                        "value": "11",
                    },
					{
                        "label": "History",
                        "value": "6",
                    },
					{
                        "label": "Horror",
                        "value": "16",
                    },
					{
                        "label": "Music",
                        "value": "9",
                    },
					{
                        "label": "Musical",
                        "value": "3",
                    },
					{
                        "label": "Mystery",
                        "value": "23",
                    },
					{
                        "label": "Romance",
                        "value": "62",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "13",
                    },
					{
                        "label": "Short",
                        "value": "4",
                    },
					{
                        "label": "Sport",
                        "value": "5",
                    },
					{
                        "label": "Thriller",
                        "value": "38",
                    },
					{
                        "label": "War",
                        "value": "9",
                    },
					{
                        "label": "Western",
                        "value": "0",
                    },
                ],
            }
        },
		
		//Year2003 Drill Down
		{
            "id": "Year2003",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2003",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "50",
                    },
                    {
                        "label": "Adveture",
                        "value": "41",
                    },
					{
                        "label": "Animation",
                        "value": "8",
                    },
					{
                        "label": "Biography",
                        "value": "20",
                    },
					{
                        "label": "Comedy",
                        "value": "105",
                    },
					{
                        "label": "Crime",
                        "value": "46",
                    },
					{
                        "label": "Documentary",
                        "value": "18",
                    },
					{
                        "label": "Drama",
                        "value": "133",
                    },
					{
                        "label": "Family",
                        "value": "19",
                    },
					{
                        "label": "Fantasy",
                        "value": "17",
                    },
					{
                        "label": "History",
                        "value": "11",
                    },
					{
                        "label": "Horror",
                        "value": "13",
                    },
					{
                        "label": "Music",
                        "value": "14",
                    },
					{
                        "label": "Musical",
                        "value": "6",
                    },
					{
                        "label": "Mystery",
                        "value": "18",
                    },
					{
                        "label": "Romance",
                        "value": "54",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "9",
                    },
					{
                        "label": "Short",
                        "value": "0",
                    },
					{
                        "label": "Sport",
                        "value": "4",
                    },
					{
                        "label": "Thriller",
                        "value": "29",
                    },
					{
                        "label": "War",
                        "value": "4",
                    },
					{
                        "label": "Western",
                        "value": "2",
                    },
                ],
            }
        },
		
		//Year2004 Drill Down
		{
            "id": "Year2004",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2004",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "47",
                    },
                    {
                        "label": "Adveture",
                        "value": "35",
                    },
					{
                        "label": "Animation",
                        "value": "13",
                    },
					{
                        "label": "Biography",
                        "value": "18",
                    },
					{
                        "label": "Comedy",
                        "value": "107",
                    },
					{
                        "label": "Crime",
                        "value": "41",
                    },
					{
                        "label": "Documentary",
                        "value": "17",
                    },
					{
                        "label": "Drama",
                        "value": "130",
                    },
					{
                        "label": "Family",
                        "value": "23",
                    },
					{
                        "label": "Fantasy",
                        "value": "9",
                    },
					{
                        "label": "History",
                        "value": "7",
                    },
					{
                        "label": "Horror",
                        "value": "16",
                    },
					{
                        "label": "Music",
                        "value": "13",
                    },
					{
                        "label": "Musical",
                        "value": "2",
                    },
					{
                        "label": "Mystery",
                        "value": "22",
                    },
					{
                        "label": "Romance",
                        "value": "67",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "14",
                    },
					{
                        "label": "Short",
                        "value": "1",
                    },
					{
                        "label": "Sport",
                        "value": "8",
                    },
					{
                        "label": "Thriller",
                        "value": "27",
                    },
					{
                        "label": "War",
                        "value": "10",
                    },
					{
                        "label": "Western",
                        "value": "1",
                    },
                ],
            }
        },
		
		//Year2005 Drill Down
		{
            "id": "Year2005",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2005",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "46",
                    },
                    {
                        "label": "Adveture",
                        "value": "44",
                    },
					{
                        "label": "Animation",
                        "value": "10",
                    },
					{
                        "label": "Biography",
                        "value": "16",
                    },
					{
                        "label": "Comedy",
                        "value": "104",
                    },
					{
                        "label": "Crime",
                        "value": "45",
                    },
					{
                        "label": "Documentary",
                        "value": "19",
                    },
					{
                        "label": "Drama",
                        "value": "132",
                    },
					{
                        "label": "Family",
                        "value": "27",
                    },
					{
                        "label": "Fantasy",
                        "value": "15",
                    },
					{
                        "label": "History",
                        "value": "9",
                    },
					{
                        "label": "Horror",
                        "value": "25",
                    },
					{
                        "label": "Music",
                        "value": "16",
                    },
					{
                        "label": "Musical",
                        "value": "6",
                    },
					{
                        "label": "Mystery",
                        "value": "21",
                    },
					{
                        "label": "Romance",
                        "value": "49",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "6",
                    },
					{
                        "label": "Short",
                        "value": "2",
                    },
					{
                        "label": "Sport",
                        "value": "14",
                    },
					{
                        "label": "Thriller",
                        "value": "29",
                    },
					{
                        "label": "War",
                        "value": "3",
                    },
					{
                        "label": "Western",
                        "value": "3",
                    },
                ],
            }
        },
		
		//Year2006 Drill Down
		{
            "id": "Year2006",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2006",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "38",
                    },
                    {
                        "label": "Adveture",
                        "value": "42",
                    },
					{
                        "label": "Animation",
                        "value": "18",
                    },
					{
                        "label": "Biography",
                        "value": "22",
                    },
					{
                        "label": "Comedy",
                        "value": "96",
                    },
					{
                        "label": "Crime",
                        "value": "40",
                    },
					{
                        "label": "Documentary",
                        "value": "11",
                    },
					{
                        "label": "Drama",
                        "value": "130",
                    },
					{
                        "label": "Family",
                        "value": "25",
                    },
					{
                        "label": "Fantasy",
                        "value": "20",
                    },
					{
                        "label": "History",
                        "value": "14",
                    },
					{
                        "label": "Horror",
                        "value": "23",
                    },
					{
                        "label": "Music",
                        "value": "11",
                    },
					{
                        "label": "Musical",
                        "value": "2",
                    },
					{
                        "label": "Mystery",
                        "value": "20",
                    },
					{
                        "label": "Romance",
                        "value": "48",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "10",
                    },
					{
                        "label": "Short",
                        "value": "2",
                    },
					{
                        "label": "Sport",
                        "value": "14",
                    },
					{
                        "label": "Thriller",
                        "value": "34",
                    },
					{
                        "label": "War",
                        "value": "5",
                    },
					{
                        "label": "Western",
                        "value": "1",
                    },
                ],
            }
        },
		
		//Year2007 Drill Down
		{
            "id": "Year2007",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2007",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "40",
                    },
                    {
                        "label": "Adveture",
                        "value": "38",
                    },
					{
                        "label": "Animation",
                        "value": "15",
                    },
					{
                        "label": "Biography",
                        "value": "22",
                    },
					{
                        "label": "Comedy",
                        "value": "88",
                    },
					{
                        "label": "Crime",
                        "value": "43",
                    },
					{
                        "label": "Documentary",
                        "value": "14",
                    },
					{
                        "label": "Drama",
                        "value": "128",
                    },
					{
                        "label": "Family",
                        "value": "32",
                    },
					{
                        "label": "Fantasy",
                        "value": "18",
                    },
					{
                        "label": "History",
                        "value": "7",
                    },
					{
                        "label": "Horror",
                        "value": "25",
                    },
					{
                        "label": "Music",
                        "value": "14",
                    },
					{
                        "label": "Musical",
                        "value": "5",
                    },
					{
                        "label": "Mystery",
                        "value": "21",
                    },
					{
                        "label": "Romance",
                        "value": "53",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "9",
                    },
					{
                        "label": "Short",
                        "value": "1",
                    },
					{
                        "label": "Sport",
                        "value": "15",
                    },
					{
                        "label": "Thriller",
                        "value": "45",
                    },
					{
                        "label": "War",
                        "value": "3",
                    },
					{
                        "label": "Western",
                        "value": "0",
                    },
                ],
            }
        },
		
		//Year2008 Drill Down
		{
            "id": "Year2008",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2008",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "53",
                    },
                    {
                        "label": "Adveture",
                        "value": "44",
                    },
					{
                        "label": "Animation",
                        "value": "14",
                    },
					{
                        "label": "Biography",
                        "value": "21",
                    },
					{
                        "label": "Comedy",
                        "value": "96",
                    },
					{
                        "label": "Crime",
                        "value": "34",
                    },
					{
                        "label": "Documentary",
                        "value": "19",
                    },
					{
                        "label": "Drama",
                        "value": "139",
                    },
					{
                        "label": "Family",
                        "value": "19",
                    },
					{
                        "label": "Fantasy",
                        "value": "15",
                    },
					{
                        "label": "History",
                        "value": "10",
                    },
					{
                        "label": "Horror",
                        "value": "13",
                    },
					{
                        "label": "Music",
                        "value": "14",
                    },
					{
                        "label": "Musical",
                        "value": "3",
                    },
					{
                        "label": "Mystery",
                        "value": "16",
                    },
					{
                        "label": "Romance",
                        "value": "52",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "14",
                    },
					{
                        "label": "Short",
                        "value": "1",
                    },
					{
                        "label": "Sport",
                        "value": "11",
                    },
					{
                        "label": "Thriller",
                        "value": "22",
                    },
					{
                        "label": "War",
                        "value": "6",
                    },
					{
                        "label": "Western",
                        "value": "0",
                    },
                ],
            }
        },
		
		//Year2009 Drill Down
		{
            "id": "Year2009",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2009",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "46",
                    },
                    {
                        "label": "Adveture",
                        "value": "40",
                    },
					{
                        "label": "Animation",
                        "value": "15",
                    },
					{
                        "label": "Biography",
                        "value": "20",
                    },
					{
                        "label": "Comedy",
                        "value": "91",
                    },
					{
                        "label": "Crime",
                        "value": "47",
                    },
					{
                        "label": "Documentary",
                        "value": "16",
                    },
					{
                        "label": "Drama",
                        "value": "132",
                    },
					{
                        "label": "Family",
                        "value": "19",
                    },
					{
                        "label": "Fantasy",
                        "value": "16",
                    },
					{
                        "label": "History",
                        "value": "2",
                    },
					{
                        "label": "Horror",
                        "value": "21",
                    },
					{
                        "label": "Music",
                        "value": "11",
                    },
					{
                        "label": "Musical",
                        "value": "3",
                    },
					{
                        "label": "Mystery",
                        "value": "29",
                    },
					{
                        "label": "Romance",
                        "value": "56",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "16",
                    },
					{
                        "label": "Short",
                        "value": "1",
                    },
					{
                        "label": "Sport",
                        "value": "6",
                    },
					{
                        "label": "Thriller",
                        "value": "29",
                    },
					{
                        "label": "War",
                        "value": "4",
                    },
					{
                        "label": "Western",
                        "value": "0",
                    },
                ],
            }
        },
		
		//Year2010 Drill Down
		{
            "id": "Year2010",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2010",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "57",
                    },
                    {
                        "label": "Adveture",
                        "value": "41",
                    },
					{
                        "label": "Animation",
                        "value": "12",
                    },
					{
                        "label": "Biography",
                        "value": "24",
                    },
					{
                        "label": "Comedy",
                        "value": "101",
                    },
					{
                        "label": "Crime",
                        "value": "35",
                    },
					{
                        "label": "Documentary",
                        "value": "24",
                    },
					{
                        "label": "Drama",
                        "value": "124",
                    },
					{
                        "label": "Family",
                        "value": "25",
                    },
					{
                        "label": "Fantasy",
                        "value": "21",
                    },
					{
                        "label": "History",
                        "value": "8",
                    },
					{
                        "label": "Horror",
                        "value": "16",
                    },
					{
                        "label": "Music",
                        "value": "9",
                    },
					{
                        "label": "Musical",
                        "value": "3",
                    },
					{
                        "label": "Mystery",
                        "value": "15",
                    },
					{
                        "label": "Romance",
                        "value": "57",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "8",
                    },
					{
                        "label": "Short",
                        "value": "0",
                    },
					{
                        "label": "Sport",
                        "value": "4",
                    },
					{
                        "label": "Thriller",
                        "value": "27",
                    },
					{
                        "label": "War",
                        "value": "4",
                    },
					{
                        "label": "Western",
                        "value": "3",
                    },
                ],
            }
        },
		
		//Year2011 Drill Down
		{
            "id": "Year2011",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2011",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "55",
                    },
                    {
                        "label": "Adveture",
                        "value": "45",
                    },
					{
                        "label": "Animation",
                        "value": "18",
                    },
					{
                        "label": "Biography",
                        "value": "14",
                    },
					{
                        "label": "Comedy",
                        "value": "100",
                    },
					{
                        "label": "Crime",
                        "value": "30",
                    },
					{
                        "label": "Documentary",
                        "value": "23",
                    },
					{
                        "label": "Drama",
                        "value": "125",
                    },
					{
                        "label": "Family",
                        "value": "17",
                    },
					{
                        "label": "Fantasy",
                        "value": "18",
                    },
					{
                        "label": "History",
                        "value": "4",
                    },
					{
                        "label": "Horror",
                        "value": "15",
                    },
					{
                        "label": "Music",
                        "value": "8",
                    },
					{
                        "label": "Musical",
                        "value": "1",
                    },
					{
                        "label": "Mystery",
                        "value": "20",
                    },
					{
                        "label": "Romance",
                        "value": "45",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "21",
                    },
					{
                        "label": "Short",
                        "value": "2",
                    },
					{
                        "label": "Sport",
                        "value": "5",
                    },
					{
                        "label": "Thriller",
                        "value": "37",
                    },
					{
                        "label": "War",
                        "value": "4",
                    },
					{
                        "label": "Western",
                        "value": "1",
                    },
                ],
            }
        },
		
		//Year2012 Drill Down
		{
            "id": "Year2012",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2012",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "50",
                    },
                    {
                        "label": "Adveture",
                        "value": "36",
                    },
					{
                        "label": "Animation",
                        "value": "10",
                    },
					{
                        "label": "Biography",
                        "value": "19",
                    },
					{
                        "label": "Comedy",
                        "value": "94",
                    },
					{
                        "label": "Crime",
                        "value": "29",
                    },
					{
                        "label": "Documentary",
                        "value": "22",
                    },
					{
                        "label": "Drama",
                        "value": "132",
                    },
					{
                        "label": "Family",
                        "value": "11",
                    },
					{
                        "label": "Fantasy",
                        "value": "15",
                    },
					{
                        "label": "History",
                        "value": "12",
                    },
					{
                        "label": "Horror",
                        "value": "17",
                    },
					{
                        "label": "Music",
                        "value": "12",
                    },
					{
                        "label": "Musical",
                        "value": "2",
                    },
					{
                        "label": "Mystery",
                        "value": "14",
                    },
					{
                        "label": "Romance",
                        "value": "42",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "12",
                    },
					{
                        "label": "Short",
                        "value": "1",
                    },
					{
                        "label": "Sport",
                        "value": "5",
                    },
					{
                        "label": "Thriller",
                        "value": "36",
                    },
					{
                        "label": "War",
                        "value": "2",
                    },
					{
                        "label": "Western",
                        "value": "2",
                    },
                ],
            }
        },
		
		//Year2013 Drill Down
		{
            "id": "Year2013",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2013",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "55",
                    },
                    {
                        "label": "Adveture",
                        "value": "41",
                    },
					{
                        "label": "Animation",
                        "value": "17",
                    },
					{
                        "label": "Biography",
                        "value": "29",
                    },
					{
                        "label": "Comedy",
                        "value": "78",
                    },
					{
                        "label": "Crime",
                        "value": "39",
                    },
					{
                        "label": "Documentary",
                        "value": "20",
                    },
					{
                        "label": "Drama",
                        "value": "132",
                    },
					{
                        "label": "Family",
                        "value": "8",
                    },
					{
                        "label": "Fantasy",
                        "value": "16",
                    },
					{
                        "label": "History",
                        "value": "11",
                    },
					{
                        "label": "Horror",
                        "value": "18",
                    },
					{
                        "label": "Music",
                        "value": "10",
                    },
					{
                        "label": "Musical",
                        "value": "3",
                    },
					{
                        "label": "Mystery",
                        "value": "13",
                    },
					{
                        "label": "Romance",
                        "value": "42",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "19",
                    },
					{
                        "label": "Short",
                        "value": "0",
                    },
					{
                        "label": "Sport",
                        "value": "6",
                    },
					{
                        "label": "Thriller",
                        "value": "37",
                    },
					{
                        "label": "War",
                        "value": "2",
                    },
					{
                        "label": "Western",
                        "value": "1",
                    },
                ],
            }
        },
		
		//Year2014 Drill Down
		{
            "id": "Year2014",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2014",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "60",
                    },
                    {
                        "label": "Adveture",
                        "value": "50",
                    },
					{
                        "label": "Animation",
                        "value": "12",
                    },
					{
                        "label": "Biography",
                        "value": "31",
                    },
					{
                        "label": "Comedy",
                        "value": "75",
                    },
					{
                        "label": "Crime",
                        "value": "29",
                    },
					{
                        "label": "Documentary",
                        "value": "15",
                    },
					{
                        "label": "Drama",
                        "value": "137",
                    },
					{
                        "label": "Family",
                        "value": "14",
                    },
					{
                        "label": "Fantasy",
                        "value": "13",
                    },
					{
                        "label": "History",
                        "value": "9",
                    },
					{
                        "label": "Horror",
                        "value": "18",
                    },
					{
                        "label": "Music",
                        "value": "11",
                    },
					{
                        "label": "Musical",
                        "value": "14",
                    },
					{
                        "label": "Mystery",
                        "value": "20",
                    },
					{
                        "label": "Romance",
                        "value": "45",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "21",
                    },
					{
                        "label": "Short",
                        "value": "0",
                    },
					{
                        "label": "Sport",
                        "value": "8",
                    },
					{
                        "label": "Thriller",
                        "value": "34",
                    },
					{
                        "label": "War",
                        "value": "5",
                    },
					{
                        "label": "Western",
                        "value": "2",
                    },
                ],
            }
        },
		
		//Year2015 Drill Down
		{
            "id": "Year2015",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2015",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "60",
                    },
                    {
                        "label": "Adveture",
                        "value": "47",
                    },
					{
                        "label": "Animation",
                        "value": "18",
                    },
					{
                        "label": "Biography",
                        "value": "37",
                    },
					{
                        "label": "Comedy",
                        "value": "91",
                    },
					{
                        "label": "Crime",
                        "value": "31",
                    },
					{
                        "label": "Documentary",
                        "value": "22",
                    },
					{
                        "label": "Drama",
                        "value": "137",
                    },
					{
                        "label": "Family",
                        "value": "8",
                    },
					{
                        "label": "Fantasy",
                        "value": "8",
                    },
					{
                        "label": "History",
                        "value": "12",
                    },
					{
                        "label": "Horror",
                        "value": "15",
                    },
					{
                        "label": "Music",
                        "value": "13",
                    },
					{
                        "label": "Musical",
                        "value": "1",
                    },
					{
                        "label": "Mystery",
                        "value": "14",
                    },
					{
                        "label": "Romance",
                        "value": "26",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "18",
                    },
					{
                        "label": "Short",
                        "value": "0",
                    },
					{
                        "label": "Sport",
                        "value": "7",
                    },
					{
                        "label": "Thriller",
                        "value": "33",
                    },
					{
                        "label": "War",
                        "value": "5",
                    },
					{
                        "label": "Western",
                        "value": "0",
                    },
                ],
            }
        },
		
		//Year2016 Drill Down
		{
            "id": "Year2016",
            "linkedchart": {
                "chart": {
                    "caption": "Division of Genres: 2016",
                    //"subcaption": "Click on a column to drill-down",
                    //"xaxisname": "Year",
                    //"yaxisname": "Number of Movies",
                    //"numberprefix": "$",
					"paletteColors": "#F44336, #673AB7, #03A9F4, #4CAF50, #FFEB3B, #FF5722, #607D8B, #E91E63, #3F51B5, #00BCD4, #8BC34A, #FFC107, #795548, #9C27B0, #2196F3, #009688, #CDDC39, #FF9800, #9E9E9E, #EF9A9A, #B39DDB, #81D4FA, #A5D6A7, #FFF59D, #FFAB91, #B0BEC5, #F48FB1, #9FA8DA, #80DEEA, #C5E1A5, #FFE082, #BCAAA4, #CE93D8, #90CAF9, #80CBC4, #E6EE9C, #FFCC80, #EEEEEE, #B71C1C, #311B92, #01579B, #1B5E20, #F57F17, #BF360C, #263238, #880E4F, #1A237E, #006064, #33691E, #FF6F00, #3E2723, #4A148C, #0D47A1, #004D40, #827717, #E65100, #212121 ",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"use3DLighting": "0",
					"showShadow": "0",
					"enableSmartLabels": "0",
					"startingAngle": "0",
					"showPercentValues": "1",
					"showPercentInTooltip": "0",
					"decimals": "1",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5",
					"showHoverEffect": "1",
					"showLegend": "1",
					"legendBgColor": "#ffffff",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666",
					"useDataPlotColorForLabels": "1"
					
                },
                "data": [
                    {
                        "label": "Action",
                        "value": "72",
                    },
                    {
                        "label": "Adveture",
                        "value": "61",
                    },
					{
                        "label": "Animation",
                        "value": "20",
                    },
					{
                        "label": "Biography",
                        "value": "28",
                    },
					{
                        "label": "Comedy",
                        "value": "84",
                    },
					{
                        "label": "Crime",
                        "value": "28",
                    },
					{
                        "label": "Documentary",
                        "value": "12",
                    },
					{
                        "label": "Drama",
                        "value": "127",
                    },
					{
                        "label": "Family",
                        "value": "17",
                    },
					{
                        "label": "Fantasy",
                        "value": "17",
                    },
					{
                        "label": "History",
                        "value": "12",
                    },
					{
                        "label": "Horror",
                        "value": "27",
                    },
					{
                        "label": "Music",
                        "value": "4",
                    },
					{
                        "label": "Musical",
                        "value": "3",
                    },
					{
                        "label": "Mystery",
                        "value": "13",
                    },
					{
                        "label": "Romance",
                        "value": "32",
                    },
					{
                        "label": "Sci-Fi",
                        "value": "11",
                    },
					{
                        "label": "Short",
                        "value": "1",
                    },
					{
                        "label": "Sport",
                        "value": "5",
                    },
					{
                        "label": "Thriller",
                        "value": "32",
                    },
					{
                        "label": "War",
                        "value": "2",
                    },
					{
                        "label": "Western",
                        "value": "2",
                    },
                ],
            }
        },
	
	]
	},
	
	
}
);
    fusioncharts.render();
});