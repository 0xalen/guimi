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
            });
            marker.addEventListener('markerLost', function() {
                var markerId = marker.id;
                console.log('markerLost', markerId);
                // Cuando se pierde un marcador
            });
        }
    });

    /**********************************************************
    *
    *   Methods
    *
    ***********************************************************/
    // Check state
    var checkState = function (v) {
        if (!v.checkLoaded()) {
            v.loadMarkers();
        } else if (v.getContentType === 0 || v.getContentType === 1 ||
                    v.getContentType === 2 || v.getContentType === 3) {
            v.loadContent();
        } else if (v.checkChosen()) {
            v.loadOptions();
        } else {
            v.searchForMarkers();
        }
    }

    /**********************************************************
    *
    *   Main
    *
    ***********************************************************/
    var visitor = new VisitorManager();
    checkState();



})();
