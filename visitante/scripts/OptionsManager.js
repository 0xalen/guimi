/** Copyright 2018 Franco Alejandro Trinidad
 *                 María Luz Almada
 *
 * GuIMI is free software: you can redistribute it and/or modify
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
 * along with GuIMI. If not, see <http://www.gnu.org/licenses/>.
 **/
function OptionsManager(mID) {
    var markerID = mID;
    var options = [];

    this.setOptions = function() {
        var oList = requestOptions();
        options = [oList.images, oList.texts, oList.videos, oList.audios]
    }

    // Contact API for info
    var requestOptions = function() {
        // Request options for element with ID = elementID
        // Process JSON file
        var opt = {
                    "images": 3,
                    "texts": 0,
                    "videos": 0,
                    "audios": 0
                };
        return oList;
    }

    this.getMarkerID = function() {
        return markerID;
    }
    this.setMarkerID = function(mID) {
        markerID = mID;
    }
}
