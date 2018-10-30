function VisitorManager() {
    var markersLoaded = false;
    var markersListM;
    var markersDetectedM;
    // var markersDetected = 0; reemplazado por markersDetectedM.getLength
    var elementChosen = false;
    var resourceM;
    var contentType = -1;
    var viewingContent = false;


    // Check state
    this.checkLoaded = function() {
        return markersLoaded;
    }
    this.checkChosen = function() {
        return elementChosen;
    }

    // MARKERS
    // Load markers
    this.loadMarkers = function() {
        markerListM = createMarkerManager();
        markerListM.setMarkers();
        markersLoaded = true;
    }
    var createMarkerManager = function() {
        return new MarkersManager();
    }

    // Search for markers in the scene
    this.searchForMarkers = function(list) {
        var i;
        for (i = 0; i < list.length; i++) {
            replaceMarkerPattern(list[i]);
            replaceName(list[i]);
            checkDetected(list[i]);
        }
    }
    var replaceMarkerPattern = function(marker) {
        pattSrc = marker.patternURL;
        document.getElementById('amarkerID').url=pattSrc;
    }
    var replaceName = function(marker) {
        eName = marker.elementName;
        document.getElementById('').elementName=eName;
    }

    var checkDetected = function(marker) {
        if (markersDetected == undefined) {
            markerMD = createMarkerManager();
        }

        /* //Check if marker is recognized
        if (){
            marker.setDetected(true);
            markerMD.addMarker(marker);
        }*/
    }

    // CONTENT
    var cType = {
        IMAGE: 0,
        TEXT: 1,
        VIDEO: 2,
        AUDIO: 3,
    }

    this.setChosen = function() {
        if (markersDetectedM.getLength() === 1) {
            elementChosen = true;
            return;
        }
            elementChosen = false;
    }

    this.loadOptions = function() {
        var chosenID = markersDetectedM.getMarkers()[0].getID();
        resourceM = createResourceManager(chosenID);
    }

    this.selectContentType = function(c) {
        setContentType(c);
        loadContent();
    }

    var setContentType = function(c) {
        contentType = c;
    }
    var loadContent = function() {
        resourceM.setContent(contentType);
    }

    this.getContentType = function() {
        return contentType;
    }

    this.displayContent = function() {
        var cList = resourceM.getContent();
    }

    var createResourceManager = function(elementID) {
        return new ResourcesManager(elementID);
    }
}