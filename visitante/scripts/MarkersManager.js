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
function MarkersManager() {
    var markerList = new MarkerList();

    this.setMarkers = function() {
        var mList = requestMarkers();
        console.log(( mList == undefined) ? "Marker list empty":"Marker list ready");
        addMarkersToList(mList);
    }

    var requestMarkers = function() {
        // Request markers from API
        // Process JSON
        // var mList = JSON.parse(sentData);
        var mList = {
                    "mID":[ "A0001", "A0002", "A0002", "A0001", "A0002" ],
                    "mElementName":[ "Apple Mouse", "IBM", "RAM", "Arcade", "HD" ],
                    "mPattURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0001.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0002.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0003.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0004.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0005.patt"]
        }
        console.log((mList == undefined) ? "Marker data missing":"Marker list data received");
        return mList;
    }

    var addMarkersToList = function(mList) {
        var i, m;
        for (i = 0; i < mList.length; i++ ) {
            m = new Marker(mList.mID[i], mList.mElementName[i], mList.rPattURL[i]);
            markerList.addMarker(m);
        }
    }

    this.getMarkers = function() {
        console.log(( markerList.length == 0) ? "Marker list empty":"Marker list ready");
        return markerList.getList();
    }
}
