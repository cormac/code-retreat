var CR = CR || {};
CR.maps = (function (document, window, undefined) {
  var mapOptions, 
      mapCenter,
      mapZoom,
      map,
      mapMarker,
      infowindow,
      initMaps;

  mapCenter = new google.maps.LatLng( 53.346131,-6.242396 );
  mapMarker = new google.maps.Marker({
      position: mapCenter,
      title: 'Telefonica Ireland'
  });
  
  mapOptions = {
    center:    mapCenter,
    zoom:      15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  contentString = '<div id="bubble-content">' +
    "<p><b>O2 Telefonica</b></p>" +
    "<p>28-29 Sir John Rogersons Quay</p>" +
    '</div>';

  infowindow = new google.maps.InfoWindow({
        content: contentString
  });


  initMaps = function () {
    map = new google.maps.Map(document.getElementById("map_canvas"),
                mapOptions);
    mapMarker.setMap(map);
    google.maps.event.addListener( mapMarker, 'click', function () {
      infowindow.open( map, mapMarker );
    });
  }

  return {
    initialize: initMaps
  };
}(document, window, undefined));

// using jquery for doc.ready cos i'm lazy :(
// which is maybe against the code retreat ethos, so if you read this.
// come give out to me 
$(document).ready(function() {
  CR.maps.initialize();
});
