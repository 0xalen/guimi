function Resource(rName, rURL) {
    var resourceName = rName;
    var resourceURL = rURL;

    this.setResourceName = function (rName) {
        resourceName = rName;
    }
    this.getResourceName = function () {
        return resourceName;
    }

    this.setResourceURL = function (rURL) {
        resourceURL = rURL;
    }
    this.getResourceURL = function () {
        return resourceURL;
    }
}
