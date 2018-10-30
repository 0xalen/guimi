function MarkerList() {
    var markerList = [];

    this.getList = function() {
        return markerList();
    }

    this.getLength = function() {
        return markerList.length;
    }

    this.addMarker = function(marker) {
        markerList.push(marker);
    }
    this.removeMarker = function(markerID) {
        var pos = this.searchElementIndex(markerID);
        xchangeElements(pos, (markerList.length - 1));
        var auxM = markerList.pop();
        console.log(( auxM == undefined ) ? "Removed element "+ auxM + "." :"Element not removed");
    }
    this.searchElementIndex = function(value) {
        /*if (list.indexOf !== undefined) {
        } else {
        } */
        return list.indexOf(value);
    }
    var xchangeElements = function(i, j) {
        var aux = markerList[i];
        markerList[i] = markerList[j];
        markerList[j] = aux;
    }
}
