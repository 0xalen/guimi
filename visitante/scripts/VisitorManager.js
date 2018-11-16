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
function VisitorManager() {
    var mManager;
    var oManager;
    var oScreen;
    var cManager;
    var cScreen;

    this.checkMarkersLoaded = function() {
        if (mManager == null) {
            return false;
        }
        return mManager.checkMarkersLoaded();
    }

    this.loadMarkers = function() {
        mManager = new MarkersManager()
        mManager.setMarkers();

        console.log("mManager.getMarkers(): " + mManager.getMarkers());   //DEBUG
        if (mManager.getMarkers() == null ) {
            loadMarkers();
        }
    }

    this.identifyScene = function() {
        mManager.searchForMarkers();
    }

    this.processScene = function(markerID, app) {
        var debugT = "Marker ID: " + markerID;                  //DEBUG
        document.getElementById("debugP").innerHTML = debugT;   //DEBUG
        oManager = new OptionsManager(markerID);
        oManager.setOptions();

        if (oManager.getOptions() !== null) {
            oScreen = new OptionsScreen(oManager.getOptions(), app);
            oScreen.displayOptionsScreen();
        } else {

        }
    }

    // If none specified, content Type defaults to image
    this.vizualizeContent = function(markerID, contentType = 0) {
        cManager = new ContentManager(markerID, contentType);
        cManager.setContent();

        if (cManager.getContent() !== null) {
            cScreen = new ContentScreen(cManager.getContent());
            cScreen.displayContentScreen();
        }
    }
}
