//global var googlemaps
var googlemaps;

// is de library ingeladen? --> initialiseer
google.maps.event.addDomListener(window, 'load', initMaps);

/*
* initialiseer de Google maps
*/
function initMaps() {

    // div met id divmap declareren in Javascript
    var divMap = document.getElementById('divMap');

    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(51.087201, 3.670080)
        // LET GOED OP DE HOOFDLETTERS L en L
    };

    googlemaps = new google.maps.Map(divMap, mapOptions);

    // marker plaatsen
    var markerPosition = new google.maps.LatLng(51.087201, 3.670080);

    var marker = new google.maps.Marker({
        // positie bepalen
        position: markerPosition,
        map: googlemaps
    });

    map.setOptions({center: markerPosition});
}