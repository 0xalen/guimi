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
        addDialog: document.querySelector('.dialog-container'),
		markersLoaded: false,
		markersDetected: false,
		chosenElementID: "",
		contentTypeChosen: -1,
		viewingContent: false,

    };
  
    /**********************************************************
    *
    *   Events
    *
    ***********************************************************/

    AFRAME.registerComponent('registerevents', {
        init: function() {
            var marker = this.el;
            marker.setAttribute('emitevents', 'true');
            marker.addEventListener('markerFound', function() {
                var markerID = marker.id;
                console.log('markerFound', markerId);
                // Cuando se encuentra un marcador
                openOptionsMenu(markerID);
            });
            marker.addEventListener('markerLost', function() {
                var markerId = marker.id;
                console.log('markerLost', markerId);
                // Cuando se pierde un marcador
                closeOptionsMenu();
            });
        }
    });

    /* Markers */
    document.getElementById("transpImage").addEventListener("click", function() {
        console.log('Element chosen');
//        selectElement();
    });

    /* Option menu events */
    document.getElementById("typeImage").addEventListener("click", function() {
        console.log('Image content selected');
        openContentGallery(0);
    });
    document.getElementById("typeText").addEventListener("click", function() {
        console.log('Text content selected');
        openContentGallery(1);
    });
    document.getElementById("typeVideo").addEventListener("click", function() {
        console.log('Video content selected');
        openContentGallery(2);
    });
    document.getElementById("typeAudio").addEventListener("click", function() {
        console.log('Audio content selected');
        openContentGallery(3);
    });

    document.getElementById("goBack").addEventListener("click", function() {
        console.log('Close menu');
        closeContentGallery();
    });



    /**********************************************************
    *
    *   UI
    *
    ***********************************************************/
    /* CONTENT OPTIONS*/
    // OPEN
    var openOptionsMenu = function(id) {
        selectElement(v, id);
        showOptions();
        getContent();
    }

    // CLOSE
    var closeOptionsMenu = function() {
        hideOptions();
        lookForMarkers();
    }

    var hideOptions = function() {
    document.getElementById('contentOptionsMenu').style.display='none';
    }

    var showOptions = function() {
        document.getElementById('contentOptionsMenu').style.display='block';
    }

    /* CONTENT GALLERY */
    // OPEN GALLERY
    var openContentGallery = function(cType) {
        // document.getElementById('debug').innerHTML = cType;
        hideOptions();
        importContent(cType);
        displayContent();
        showContentGallery();
    }

    // CLOSE GALLERY
    var closeContentGallery = function() {
        hideContentGallery();
        openOptionsMenu();

    }

    var hideContentGallery = function() {
        document.getElementById('contentGallery').style.display='none';
    }

    var showContentGallery = function() {
        document.getElementById('contentGallery').style.display='block';
    }

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
    // Check state
    var importMarkers = function(v) {
        if (!v.checkLoaded()) {
            v.loadMarkers();
            app.markersLoaded = v.checkLoaded();
    	}
    }

  	var lookForMarkers = function(v) {
		// TO DO change with A-FRAME to create Scenes
		v.searchForMarkers()
  	}

    var selectElement = function(v, id) {
        app.chosenElementID = id;
        v.selectElement(id);
    }

    var importOptions = function() {
         if (v.checkChosen()) {
            v.loadOptions();
        }

	  var importContent = function(c) {
    	if (v.getContentType === 0 || v.getContentType === 1 ||
            v.getContentType === 2 || v.getContentType === 3) {
            v.loadContent();
        } else {
        	console.log("Invalid content type");
        }
    }

    var getContent = function(v) {
        displayContent(v.getContent(), v.getContentType());
    }

    var displayContent = function(cList, cType) {
        // Tomar lista de recursos de contenido y agregarla dinámicamnete al slide
          var media = cList.getResourceURL();
          document.getElementById('transpImage').url=media;
    }
	/*
		markersLoaded: false,
		markersDetected: false,
		elementChosen: false,
		contentTypeChosen: false,
		viewingContent: false,
	*/

    /* MAIN */
    var visitor = new VisitorManager();

	// Load markers
	if (!app.markersLoaded) {
		importMarkers(visitor);
	}

	lookForMarkers(visitor);

	// Service worker
	if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker registered'); });
  }

})();
