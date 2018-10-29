function Resource(rName, rURL) {
    var resourceName = rName;
    var resourceURL = rURL;

    this.getResourceName = function () {
        return resourceName;
    }
    this.getResourceURL = function () {
        return resourceURL;
    }

    this.setResourceName = function (rName) {
        resourceName = rName;
    }
    this.setResourceURL = function (rURL) {
        resourceURL = rURL;
    }
}
