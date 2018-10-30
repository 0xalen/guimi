function MarkersManager() {
    var markerList = [];

    this.setMarkers = function() {
        var mList = requestMarkers();
        console.log(( mList == undefined) ? "Marker list empty":"Marker list ready");
        addMarkersToList(mList);
    }

    this.getMarkers = function() {
        console.log(( markerList.length == 0) ? "Marker list empty":"Marker list ready");
        return markerList;
    }

    var requestMarkers = function() {
        // Request markers from API
        // Process JSON
        // var mList = JSON.parse(sentData);
        var mList = {
                    "mID":[ "A0001", "A0002", "A0002", "A0001", "A0002" ],
                    "mElementName":[ "Apple Mouse", "IBM", "RAM", "Arcade", "HD" ],
                    "mPattURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0001.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0002.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0003.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0004.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0005.patt"]
        }
        console.log((mList == undefined) ? "Marker data missing":"Marker list data received");
        return mList;
    }

    // Marker handling
    var addMarkersToList = function(mList) {
        var i, m;
        for (i = 0; i < mList.length; i++ ) {
            m = createMarker(mList.mID[i], mList.mElementName[i], mList.rPattURL[i]);
            this.addMarker(m);
        }
    }

    var createMarker = function(eID, eName, eURL) {
        var m = new Marker(mID, eName, mURL);
        console.log(( m == undefined ) ? "Marker not created":"Marker created");
        return m;
    }

    // Generic List methods
    this.addMarker = function(marker) {
        markerList.push(marker);
    }
    this.removeMarker = function(markerID) {
        var pos = this.searchElementIndex(markerID);
        xchangeElements(pos, (markerList.length - 1));
        var auxM = markerList.pop();
        console.log(( auxM == undefined ) ? "Removed element "+ auxM + "." :"Element not removed");
    }
    this.searchElementIndex = function(markerID) {
        /*if (list.indexOf !== undefined) {
        } else {

        } */
        return list.indexOf(markerID);
    }
    var xchangeElements = function(i, j) {
        var aux = markerList[i];
        markerList[i] = markerList[j];
        markerList[j] = aux;
    }

    var checkElement = function(id) {
        return
    }

}
