function Marker(eID, eName, pattURL) {
    var id = eID;
    var elementName = eName;
    var patternURL = pattURL;

    this.setID = function(eID) {
        id = eID;
    }
    this.getID = function() {
        return id;
    }

    this.setElementName = function(eName) {
        elementName = eName;
    }
    this.getElementName = function() {
        return elementName;
    }

    this.setPatternURL = function(pattURL) {
        patternURL = pattURL;
    }
    this.getPatternURL = function(){
        return patternURL;
    }
}

