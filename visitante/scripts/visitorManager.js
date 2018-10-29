function createVisitorManager() {
    this.markersLoaded = false;

}

function searchForMarkers(list) {
    var i;
    for (i = 0; i < list.length; i++) {
       replaceMarkerPattern(list[i]);
       replaceName(list[i]);
    }
}

function replaceMarkerPattern(marker) {
    pattSrc = marker.patternURL;
    document.getElementById('amarkerID').url=pattSrc;
}

function replaceName(marker) {
    eName = marker.elementName;
    document.getElementById('').elementName=eName;
}   

function checkMarkers(visitorManager) {
    if (visitorManager.markersLoaded = false) {

    } else {

    }
}
