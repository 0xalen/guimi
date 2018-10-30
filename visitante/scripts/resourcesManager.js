function ResourcesManager(eID) {
    var elementID = eID;
    var resourceList = [];
    var imageCount = 0;
    var textCount = 0;
    var videoCount = 0;
    var audioCount = 0;

    this.getElementID = function() {
        return elementID;
    }
    this.setElementID = function(eID) {
        elementID = eID;
    }

    // Handle options
    this.setOptions = function() {
        requestOptions;
    }
    this.getOptions = function() {
        var oc = [imageCount, textCount, videoCount, audioCount];
        return oc;
    }

    // Handle Content
    this.setContent = function() {

    }

    this.getContent = function() {

    }

    // Keep count of content available
    this.getImageCount = function () {
        return imageCount;
    }
    this.setImageCount = function(img) {
        imageCount = img;
    }

    this.getTextCount = function() {
        return textCount;
    }
    this.setTextCount = function(txt) {
        textCount = txt;
    }

    this.getVideoCount = function() {
        return videoCount;
    }
    this.setVideoCount = function(vid) {
        videoCount = vid;
    }

    this.getAudioCount = function() {
        return audioCount;
    }
    this.setAudioCount = function(img) {
        audioCount = aud;
    }

    // Resource handling
    this.createResource = function(rName, rURL) {
        var r = new Resource(rName, rURL);
        return r;
    }
    this.addResource = function(resource) {
        resourceList.push(resource);
    }
    this.addElementsToList = function(rList) {
        var i, r;
        for (i = 0; i < rList.length; i++ ) {
            r = this.createResource(rList.rName, rList.rURL);
            this.addResource(r);
        }
    }

    // Contact API for info
    var requestOptions = function() {
        // Request options for element with ID = elementID
        // Process JSON file
        setOptionsCount(opts);
    }

    var setOptionsCount = function(opt) {
        this.setImageCount(opts[0]);
        this.setTextCount(opts[1]);
        this.setVideoCount(opts[2]);
        this.setAudioCount(opts[3]);
    }

    // Contact API for content
    var requestImages = function() {
        // Request image content for element with ID = elementID
        // Process JSON file
        this.addElementsToList(rList);
    }
    var requestTexts = function() {
        // Request text content for element with ID = elementID
        // Process JSON file
        this.addElementsToList(rList)
    }
    var requestVideos = function() {
        // Request videos content for element with ID = elementID
        // Process JSON file
        this.addElementsToList(rList)
    }
    var requestAudio = function() {
        // Request audio content for element with ID = elementID
        // Process JSON file
        this.addElementsToList(rList)
    }

}