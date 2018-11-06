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
}
