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
        spinner: document.querySelector('.loader'),
        container: document.querySelector('.main'),
		markersLoaded: false,
		visitorManager: null,
		markerCounter: 0,
		selectedMarker: undefined,
		viewingOptions: false,
		viewingContent: false,
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
    /*
    var m = document.querySelector("a-marker");
    m.addEventListener("markerFound", (e)=>{
        console.log("found")
    })

    m.addEventListener("markerLost", (e)=>{
        console.log("lost")
    }) */
    /* TEMP EVENTS */
    app.addDebugEventListeners = function() {
        console.log("Add debug event listeners");
        document.getElementById("debugBtn1").addEventListener("click", function() {
                console.log('Process Marker (A0001)');
                app.markerCounter++;
                app.processMarker('A0001');
                console.log('Marker counter: ' + app.markerCounter);
        });
        document.getElementById("debugBtn2").addEventListener("click", function() {
                console.log('Process Marker (A0002)');
                app.markerCounter++;
                app.processMarker('A0002');
                console.log('Marker counter: ' + app.markerCounter);    //DEBUG
        });
        document.getElementById("debugBtn3").addEventListener("click", function() {
                console.log('Process Marker (A0003)');
                app.markerCounter++;
                app.processMarker('A0003');
                console.log('Marker counter: ' + app.markerCounter);    //DEBUG
        });
    }

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
    app.checkLoader = function() {
        if (app.isLoading) {
            app.spinner.setAttribute('hidden', true);
            app.container.removeAttribute('hidden');
            app.isLoading = false;
        }
    }

    app.destroyContent = function() {
        console.log("Destroy content objects (app)");
        //app.viewingContent = false;
        console.log("Delegate to process Marker");
        //app.visitor.processScene(app.selectedMarker, app);
        app.processMarker(app.selectedMarker);
    }
    app.destroyOptions = function() {
        console.log("Destroy options objects (app)");
        app.markerCounter = 0;
        console.log('Marker counter: ' + app.markerCounter);        //DEBUG
        app.viewingOptions = false;
        app.selectedMarker = undefined;
        console.log("Delegate to process Marker");
        //app.visitor.destroyOptionsScreen();
        app.processMarker(app.selectedMarker);
    }
    /**********************************************************
    *
    * MAIN
    *
    **********************************************************/
    // Page loader
    //checkLoader();

	/**************** AUGMENTED REALITY *********************/
	app.visitor = new VisitorManager(app);
    // Load Markers
	app.visitor.loadMarkers(function(){
	    console.log("Markers loaded at start");
	    alert("markersLoaded: " + app.markersLoaded);
	    app.addDebugEventListeners();
	    app.checkLoader();
	    app.visitor.identifyScene();
	});

   app.processMarker = function(mID) {
        console.log("app.mCounter === 1?: " + (app.markerCounter === 1));
        console.log("app.mCounter: " + app.markerCounter);
        if (app.markerCounter === 1) {
            app.selectedMarker = mID;
            app.viewingOptions = true;
            if (app.viewingContent === true) {
                app.viewingContent = false;
                app.visitor.destroyContentScreen();
            }
            console.log("Processing marker: " + app.selectedMarker);
            app.visitor.processScene(app.selectedMarker, app);
        } else {
            console.log("app.viewingOptions === true: " + (app.viewingOptions === true));
            console.log("app.viewingContent === true: " + (app.viewingContent === true));
            app.markerCounter = 0;
            if (app.viewingContent === true) {
                console.log("Viewing content true -> false");
                app.viewingContent = false;
                app.visitor.destroyContentScreen();
            }
            if (app.viewingOptions === true) {
                console.log("Viewing options true -> false");
                app.viewingOptions = false;
                app.visitor.destroyOptionsScreen();
            }
        }
    }

    app.processOption = function(cType) {
        app.viewingContent = true;
        console.log("Visualize content: " + cType);
        app.visitor.visualizeContent(app.selectedMarker, cType);
    }


	// Service worker
	console.log("Checking for Service Worker");
	if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             //.register('./../service-worker.js')
             .register('https://0xalen.github.io/guimi/service-worker.js')
             .then(function() { console.log('Service Worker registered'); });
  }

})();
