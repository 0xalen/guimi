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
