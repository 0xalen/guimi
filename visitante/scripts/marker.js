function Marker(eID, eName, pattURL) {
    var id = eID;
    var elementName = eName;
    var patternURL = pattURL;

    this.getID = function() {
        return id;
    }
    this.getElementName = function() {
        return elementName;
    }
    this.getPatternURL = function(){
        return patternURL;
    }

    this.setID = function(eID) {
        id = eID;
    }
    this.setElementName = function(eName) {
        elementName = eName;
    }
    this.setPatternURL = function(pattURL) {
        patternURL = pattURL;
    }
}

