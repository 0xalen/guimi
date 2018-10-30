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

    /* Option menu events */
    document.getElementById('typeImage').addEventListener('click', function() {
        chooseContentType(0);
    });
    document.getElementById('typeText').addEventListener('click', function() {
        chooseContentType(1);
    });
    document.getElementById('typeVideo').addEventListener('click', function() {
        chooseContentType(2);
    });
    document.getElementById('typeAudio').addEventListener('click', function() {
        chooseContentType(3);
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
    *   UI
    *
    ***********************************************************/

    /* Content options*/
    var hideOptions = function() {
    document.getElementById('contentOptionsMenu').style.display='none';
    }

    var showOptions = function() {
        document.getElementById('contentOptionsMenu').style.display='block';
    }

    var chooseContentType = function(cType) {
        document.getElementById('debug').innerHTML = cType;
        //selectContentType(cType);
    }

    /* Content gallery */


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
    var visitor = new VisitorManager();
    checkState();



})();
