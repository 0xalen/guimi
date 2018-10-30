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
    this.setContent = function(contentType) {
        var rList;
        switch (contentType) {
            case 0:
                rList = requestImages();
                break;
            case 1:
                rList = requestTexts();
                break;
            case 2:
                rList = requestVideos();
                break;
            case 3:
                rList = requestAudios();
                break;
            default:
                rList = requestTexts();
        }
        console.log((rList == undefined) ? "Resources not received":"Resources received")
        addElementsToList(rList);
    }

    this.getContent = function() {
        return resourceList;
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
    var addElementsToList = function(rList) {
        var i, r;
        for (i = 0; i < rList.length; i++ ) {
            r = createResource(rList.rName[i], rList.rURL[i]);
            addResource(r);
        }
    }

    var createResource = function(rName, rURL) {
        var r = new Resource(rName, rURL);
        return r;
    }
    var addResource = function(resource) {
        resourceList.push(resource);
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
        /**
        *   // Until the API is implemented, these are test values
        *   {
        *   "rName":[ "CA0005_I-01", "CA0005_I-02", "CA0005_I-03" ],
        *   "rURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0005_I-01.png", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0005_I-02.png", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0005_I-03.png"]
        *   }
        *
        **/
        var rList = {
                    "rName":[ "CA0005_I-01", "CA0005_I-02", "CA0005_I-03" ],
                    "rURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0005_I-01.png", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0005_I-02.png", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0005_I-03.png"]
        }

        return rList;
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
    var requestAudios = function() {
        // Request audio content for element with ID = elementID
        // Process JSON file
        this.addElementsToList(rList)
    }

}