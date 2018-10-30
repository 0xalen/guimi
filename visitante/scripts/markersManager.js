function MarkersManager() {
    var markerList = [];


    var requestMarkers = function() {
        // Request markers from API
        // Process JSON
        // var mList = JSON.parse(sentData);
        var mList = {
                    "mID":[ "A0001", "A0002", "A0002", "A0001", "A0002" ],
                    "mElementName":[ "Apple Mouse", "IBM", "RAM", "Arcade", "HD" ],
                    "mPattURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0001.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0002.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0003.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0004.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0005.patt"]
        }
    }


    function addMarker(marker) {
        list.push(marker);
        return list;
    }

    function removeMarker(list) {
        list
    }

    function searchElementIndex(list, element) {
        if (list.indexOf !== undefined) {
            list.indexOf(element);
        } else {

        }
    }

}
