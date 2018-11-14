/**
 * GuIMI: Guía Interactiva del Museo de Informática (UNPA-UARG)
 * Copyright (C) 2018 Franco Alejandro Trinidad
 *                    María Luz Almada
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 **/
function ContentManager(mID, cType) {
    var contentList = new ContentList();
    var markerID = mID;
    var contentType = cType;

    // Handle Content
    this.setContent = function() {
        var cList = requestContent();
        addContentToList(cList);
    }

    var requestContent = function() {
        // Request image content for element with ID = elementID
        // Process JSON file
        // (Until the API is implemented, these are test values)
        var cList = {
                    "cName":[ "CA0005_I-01", "CA0005_I-02", "CA0005_I-03" ],
                    "cURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0005_I-01.png", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0005_I-02.png", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0005_I-03.png"]
        }
        return cList;
    }

    var addContentToList = function(cList) {
        var i, c;
        for (i = 0; i < cList.getLength(); i++ ) {
            c = new Content(cList.cName[i], cList.cURL[i]);
            contentList.addContent(c);
        }
    }

    this.getContent = function() {
        return contentList;
    }

    this.getMarkerID = function() {
        return markerID;
    }
    this.setMarkerID = function(mID) {
        markerID = mID;
    }

    this.showContent = function() {

    }

    this.displayContent = function() {
        // reemplazar contentName y contentURL en el html correspondiente
    }

    var addImageElement = function() {
        /*
        <a-image width="1" height="1" src="#transpImage"></a-image>
        */

        var markerEl = document.getElementById(markerID);
	    //document.getElementById("debugP").innerHTML = markerEl.id;              /* DEBUG*/

	    var entityEl = document.createElement('a-entity');

	    var scaleX = "0.1";
	    var scaleY = "0.2";
	    var scaleZ = "0.2";
	    var scaleAtt = document.createAttribute("scale");
	    scaleAtt.value = scaleX +  " " + scaleY + " " + scaleZ;
	    entityEl.setAttributeNode(scaleAtt);

	    var visibility = document.createAttribute("visible");
	    visibility.value = true;
	    entityEl.setAttributeNode(visibility);

	    var coneEl = document.createElement('a-cone');

        var posX = "0";
        var posY = "6";
        var posZ = "2";

        var pos = document.createAttribute("position");
        pos.value = posX +  " " + posY + " " + posZ;
        coneEl.setAttributeNode(pos);

        var rotX = "90";
        var rotY = "0";
        var rotZ = "0";

        var rot = document.createAttribute("rotation");
        rot.value = rotX +  " " + rotY + " " + rotZ;
        coneEl.setAttributeNode(rot);

        markerEl.insertAdjacentElement('beforeend', entityEl);

        var mat = document.createAttribute("material");
        mat.value = "opacity: 0.5; side:double; color:red";

        coneEl.setAttributeNode(mat );

        entityEl.insertAdjacentElement('beforeend', coneEl);
    }

    /***************************** IMAGE **************************************/
    var displayImage = function(cName, cURL) {
        var markerEl = document.getElementById(markerID);

        // Replace image source with the element's cURL
        markerEl.src = cURL;

        displayName(cName);
    }
    var addImage = function() {
        // Query a-marker
        var markerEl = document.getElementById(markerID);

        // Create image Element
        var imageEl = document.createElement('a-image');
        // POSITION
        var posX = "0";
        var posY = "1";
        var posZ = "0";

        var pos = document.createAttribute("position");
        pos.value = posX +  " " + posY + " " + posZ;
        imageEl.setAttributeNode(pos);
        // ROTATION
        var rotX = "-90";
        var rotY = "0";
        var rotZ = "0";

        var rotEL = document.createAttribute("rotation");
        rotEl.value = rotX +  " " + rotY + " " + rotZ;
        imageEl.setAttributeNode(rotEl);

        // Add image to to marker
        markerEl.insertAdjacentElement('beforeend', imageEl);
    }

    /***************************** TEXT ***************************************/
    var displayText = function(cName, cURL) {
        var valEl = document.createAttribute("value");
        valEl.value = cURL;

        displayName(cName);
    }
    var addTextElement = function() {
        // Query a-marker
        var markerEl = document.getElementById(markerID);

        // Create text Element
        var textEl = document.createElement('a-text');
        // POSITION
        var posX = "0";
        var posY = "1";
        var posZ = "0";
        var pos = document.createAttribute("position");
        pos.value = posX +  " " + posY + " " + posZ;
        textEl.setAttributeNode(pos);

        // ROTATION
        var rotX = "-90";
        var rotY = "0";
        var rotZ = "0";
        var rotEL = document.createAttribute("rotation");
        rotEl.value = rotX +  " " + rotY + " " + rotZ;
        textEl.setAttributeNode(rotEl);

        // Add image to to marker
        markerEl.insertAdjacentElement('beforeend', textEl);
    }

    var displayName = function(cName) {
        // Query a-marker
        var markerEl = document.getElementById(markerID);

        // Replace image source with the element's cURL
        markerEl.src = cURL;

        // Create text Element
        var textEl = document.createElement('a-text');
        // POSITION
        var posX = "0";
        var posY = "2";
        var posZ = "2";
        var pos = document.createAttribute("position");
        pos.value = posX +  " " + posY + " " + posZ;
        textEl.setAttributeNode(pos);

        // ROTATION
        var rotX = "-90";
        var rotY = "0";
        var rotZ = "0";
        var rotEL = document.createAttribute("rotation");
        rotEl.value = rotX +  " " + rotY + " " + rotZ;
        textEl.setAttributeNode(rotEl);

        var valEl = document.createAttribute("value");
        valEl.value = cName;

        // Add image to to marker
        markerEl.insertAdjacentElement('beforeend', textEl);
    }
}
