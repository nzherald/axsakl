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

$.ajax({
  url: '/api/stops.json',
  success: function(result) {
    $.each(result, function(index, value) {
      L.marker([value.coordinates.coordinates[1], value.coordinates.coordinates[0]]).addTo(map);
    });
  }
});

/*
$.ajax({
  url: '/api/meshblocks/135201.json',
  success: function(result) {
    L.geoJSON(result.shape).addTo(map);
  }
});
*/

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
