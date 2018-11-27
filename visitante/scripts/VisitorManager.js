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
function VisitorManager(mainApp) {
    var mManager;
    var oManager;
    var oScreen;
    var cManager;
    var cScreen;
    var app = mainApp;

    this.checkMarkersLoaded = function() {
        if (typeof mManager == 'undefined') {
            return false;
        }
        return mManager.checkMarkersLoaded();
    }

    this.loadMarkers = function(callback) {
        mManager = new MarkersManager()
        mManager.setMarkers(function(){
	        callback();
	    });

        //console.log("mManager.getMarkers(): " + mManager.getMarkers());   //DEBUG
        /*if (typeof mManager.getMarkers() == 'undefined' ) {
            loadMarkers();
        }*/
        //callback(true);
    }

    this.identifyScene = function() {
        mManager.searchForMarkers();
    }

    this.processScene = function(markerID) {
        console.log("Hide unselected markers");  //DEBUG
        mManager.hideUnselectedMarkers(markerID);
        console.log("typeof oManager === 'undefined': " + (typeof oManager === 'undefined') );
        if (typeof oManager === 'undefined'){
            oManager = new OptionsManager(markerID);
            oManager.setOptions();
        }
        console.log("typeof oScreen === 'undefined': " + (typeof oScreen === 'undefined') );
        if (typeof oScreen === 'undefined') {
            oScreen = new OptionsScreen(oManager.getOptions(), app);
        }
        console.log("Display Options Screen: call to oScreen");
        oScreen.displayOptionsScreen();
    }

    // If none specified, content Type defaults to image
    this.visualizeContent = function(markerID, contentType = 0) {
        console.log("typeof cManager === 'undefined' " + (typeof cManager === 'undefined'));
        if (typeof cManager === 'undefined') {
            cManager = new ContentManager(markerID, contentType);
            cManager.setContent();
        }
        console.log("typeof cScreen === 'undefined' " + (typeof cScreen === 'undefined'));
        if (typeof cScreen === 'undefined') {
            cManager.prepareContent();
            cScreen = new ContentScreen(cManager.getContent(), app, cManager);
        }
        cScreen.displayContentScreen();
    }

    this.destroyContentScreen = function() {
        //cScreen.closeContentScreen();
        console.log("Destroy content block");
        //cManager.hideContent();
        cManager.hideContent(function() {
            cManager = undefined;
            cScreen = undefined;
            console.log("Content Screen destroyed (vManager)");
            console.log("cManager: " + cManager);
            console.log("cScreen: " + cScreen);
            //oManager.setOptions();

        });
    }

    this.destroyOptionsScreen = function() {
        oScreen.closeOptionsScreen();
        oManager = undefined;
        oScreen = undefined;
        console.log("Display all markers");  //DEBUG
        mManager.displayAllMarkers();
    }

}
