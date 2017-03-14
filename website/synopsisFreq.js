
  FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'column3d',
    renderAt: 'freqDetail',
    width: "700",
    height: "500",
    dataFormat: 'json',
    insertMode: "prepend",
    dataSource: {
        "chart": {
            "caption": "Top 10 Words in Synopsis",
            "subCaption": "1992 - 2016",
            "xAxisName": "Word",
            "yAxisName": "Frequency",
            //"numberPrefix": "$",
            //"theme": "fint"
        },

        "data": [{
            "label": "Family",
            "value": "223"
        }, {
            "label": "Friends",
            "value": "150"
        }, {
            "label": "Group",
            "value": "172"
        }, {
            "label": "Life",
            "value": "385"
        }, {
            "label": "Lives",
            "value": "152"
        }, {
            "label": "Love",
            "value": "172"
        }, {
            "label": "Man",
            "value": "317"
        }, {
            "label": "Story",
            "value": "359"
        }, {
            "label": "World",
            "value": "185"
        }, {
            "label": "Young",
            "value": "487"
        }]
    },

    "events": {
        "beforeRender": function(evt, args) {
            var controllers = evt.sender._controllers,
                radio = [],
                radElem,
                val;

            if (!controllers) {
                controllers = evt.sender._controllers = document.createElement("div");
                controllers.innerHTML = "<form><label style='display:inline;margin-bottom:0;'><input name='chart-type' id='change-chart-type-line' type='radio' value='line' /> Line chart</label>&nbsp;&nbsp;<input name='chart-type' id='change-chart-type-bar' type='radio' value='bar3d' />&nbsp;<label for='change-chart-type-bar' style='display:inline;margin-bottom:0;'>Bar chart</label>&nbsp;&nbsp;<input name='chart-type' id='change-chart-type-column' type='radio' value='column3d' checked='true' />&nbsp;<label for='change-chart-type-column' style='display:inline;margin-bottom:0;'>Column chart</label></form>";
                controllers.style.cssText = "text-align: Center;"
                var clearText = args.container.firstChild;
                while (clearText) {
                    ((clearText.nodeType === 3) || (clearText.nodeName === "#text")) && clearText.parentNode.removeChild(clearText);
                    clearText = clearText.nextSibling;
                }
                args.container.appendChild(controllers);

                radio = controllers.getElementsByTagName('input');
                for (i = 0; i < radio.length; i++) {
                    radElem = radio[i];
                    if (radElem.type === 'radio') {
                        radElem.onchange = function() {
                            val = this.getAttribute('value');
                            val && evt.sender.chartType(val);
                        };
                    }
                }
            }
        }
    }
}
);
    fusioncharts.render();
});