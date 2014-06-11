// var lat = 0,
// 	lon = 0,
// 	foundLocation = function(position){
// 		lat = position.coords.latitude,
// 	    lon = position.coords.longitude;
// 	},
// 	noLocation = function(){
// 		lat = -36.853282;
// 	    lon = 174.765896;
// 	}
// ;

// var currentPosition = navigator.geolocation.getCurrentPosition(foundLocation, noLocation);

var map = L.map('map').setView([-36.853282, 174.765896], 13);

var hello = L.layerGroup([L.tileLayer('http://{s}.tiles.mapbox.com/v3/nzherald.gb3l9agk/{z}/{x}/{y}.png')]).addTo(map);

/*
$.ajax({
  url: '/api/stops.json',
  success: function(result) {
    $.each(result, function(index, value) {
      L.marker([value.coordinates.coordinates[1], value.coordinates.coordinates[0]]).addTo(map);
    });
  }
});
*/


var myStyle = {
  "color": "#ff7800",
  "weight": 5,
  "opacity": 0.65
};


L.geoJson({ "type": "Polygon", "coordinates": [ [ [ 174.729913683279904, -36.855446950018994 ], [ 174.731431450116133, -36.854753450096027 ], [ 174.732280200125615, -36.854381583333279 ], [ 174.73252311672303, -36.854267666532849 ], [ 174.732922516524241, -36.854808533284107 ], [ 174.733244600155388, -36.855126616517538 ], [ 174.73332931661372, -36.855082316702742 ], [ 174.733419699806177, -36.855146533111892 ], [ 174.733836283174412, -36.855429583456207 ], [ 174.733976616556276, -36.855569833485589 ], [ 174.734080699955314, -36.855673833264781 ], [ 174.734153733285581, -36.855746783503953 ], [ 174.734158200196703, -36.855751299868416 ], [ 174.734208233094137, -36.855821483280927 ], [ 174.732381800085477, -36.856663749790044 ], [ 174.730332016851236, -36.857625483393598 ], [ 174.730213749749936, -36.856579250030229 ], [ 174.730198516563718, -36.856429333310473 ], [ 174.729913683279904, -36.855446950018994 ] ] ] }, { style: myStyle }).addTo(map);

// resize the map
var waitForFinalEvent = (function () {
	  var timers = {};
	  return function (callback, ms, uniqueId) {
	    if (!uniqueId) {
	      uniqueId = "Don't call this twice without a uniqueId";
	    }
	    if (timers[uniqueId]) {
	      clearTimeout (timers[uniqueId]);
	    }
	    timers[uniqueId] = setTimeout(callback, ms);
	  };
	})(),
	resizeMap = function(){
		$map.height(window.innerHeight - headerHeight);
	}
;


var $map = $('#map'),
	headerHeight = $('#header').height();

resizeMap();

$(window).resize(function () {
	waitForFinalEvent(function(){
		resizeMap();
	}, 500, "some unique string");
});
