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
function Marker(eID, eName, pattURL) {
    var id = eID;
    var elementName = eName;
    var patternURL = pattURL;

    this.setID = function(eID) {
        id = eID;
    }
    this.getID = function() {
        return id;
    }

    this.setElementName = function(eName) {
        elementName = eName;
    }
    this.getElementName = function() {
        return elementName;
    }

    this.setPatternURL = function(pattURL) {
        patternURL = pattURL;
    }
    this.getPatternURL = function(){
        return patternURL;
    }
}

