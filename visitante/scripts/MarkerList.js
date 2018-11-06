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
function MarkerList() {
    var markerList = [];

    this.getList = function() {
        return markerList();
    }

    this.getLength = function() {
        return markerList.length;
    }

    this.addMarker = function(marker) {
        markerList.push(marker);
    }

    this.searchElementIndex = function(value) {
        return list.indexOf(value);
    }
}
