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

    this.searchElementIndex = function(value) {
        return list.indexOf(value);
    }
}
