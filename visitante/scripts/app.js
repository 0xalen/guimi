// Copyright 2016 Google Inc.
//            2018 Franco Alejandro Trinidad
//				  María Luz Almada
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function() {
    'use strict';

    var app = {
        isLoading: true,
//        spinner: document.querySelector('.loader'),
        container: document.querySelector('.main'),
        addDialog: document.querySelector('.dialog-container'),
		markersLoaded: false,
		visitorManager: null,
		markerCounter: 0,
		selectedMarker: "",

    };
  
    /**********************************************************
    *
    *   Events
    *
    ***********************************************************/
    /*
    AFRAME.registerComponent('registerevents', {
        init: function() {
            var marker = this.el;
            marker.setAttribute('emitevents', 'true');
            marker.addEventListener('markerFound', function() {
                var markerID = marker.id;
                console.log('markerFound', markerId);
                selectedMarkers++;
                setTimeout(function() {
                        processMarker(markerId)
                        }, 2000);
            });
            marker.addEventListener('markerLost', function() {
                var markerId = marker.id;
                console.log('markerLost', markerId);
                // Cuando se pierde un marcador
                selectedMarkers++;
                setTimeout(function() {
                        processMarker(markerId)
                        }, 2000);
            });
        }
    });
    */
    var m = document.querySelector("a-marker");
    m.addEventListener("markerFound", (e)=>{
        console.log("found")
    })

    m.addEventListener("markerLost", (e)=>{
        console.log("lost")
    })

    document.getElementById("debugBtn").addEventListener("click", function() {
            console.log('Process Marker (TEST)');
            app.markerCounter++;
            app.processMarker('A0003');
            console.log('Marker counter: ' + app.markerCounter);
        });

    /**********************************************************
    *
    *   UI
    *
    ***********************************************************/


    /**********************************************************
    *
    *   Model
    *
    ***********************************************************/

    /**********************************************************
    *
    *   Control
    *
    ***********************************************************/

    /*  METHODS */
    // Loader
  /*   var checkLoader = function() {
        if (app.isLoading) {
          app.spinner.setAttribute('hidden', true);
          app.container.removeAttribute('hidden');
          app.isLoading = false;
        }
    }*/

    /**********************************************************
    *
    * MAIN
    *
    **********************************************************/
    // Page loader
    //checkLoader();

	/**************** AUGMENTED REALITY *********************/
	app.visitor = new VisitorManager();
    // Load Markers
	app.visitor.loadMarkers();

    app.visitor.identifyScene();

   app.processMarker = function(mID) {
        if (app.markerCounter === 1) {
            app.visitor.processScene(mID, app);
            app.selectedMarker = mID;
        }
    }

    app.processOption = function(cType) {
        app.visitor.vizualizeContent(app.selectedMarker, cType);
    }


	// Service worker
	if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker registered'); });
  }

})();
