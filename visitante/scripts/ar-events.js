AFRAME.registerComponent('registerevents', {
        init: function() {
            var marker = this.el;
            marker.addEventListener('markerFound', function() {
                var markerID = marker.id;
                console.log('markerFound' + markerId);
                alert('markerFound', markerId);
            });
            marker.addEventListener('markerLost', function() {
                var markerId = marker.id;
                console.log('markerLost' + markerId);
                alert('markerLost', markerId);
            });
        }
    });
/*
AFRAME.registerComponent('select-marker', {
      schema: {
        message: {type: 'string', default: 'Marker selected!'}
      },

      init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
        var markerID = el.getAttribute('id');

        el.addEventListener('click', function () {
          //el.setAttribute('color', data.color);
          console.log("el.id: " + markerID);
        });
      }
    });*/
AFRAME.registerComponent('select-marker', {
        schema: {
            message: {type: 'string', default: 'Select Markers'}
        },

        init: function () {
            var self = this;
            this.eventHandlerFn = function() { console.log(self.data.message); };
        },

        update: function() {
            var data = this.data;
            var el = this.el;
            var markerID = el.getAttribute('id');

            el.addEventListener('click', function () {
              //el.setAttribute('color', data.color);
              console.log("el.id: " + markerID);
              //document.getElementById("markerData").innerHTML= markerID;
            });
        }
    });
