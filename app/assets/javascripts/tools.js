// days of the week
var findDay = function(num) {
	switch(num) {
		case '1.00': return 'Mon';
		case '2.00': return 'Tue';
		case '3.00': return 'Wed';
		case '4.00': return 'Thu';
		case '5.00': return 'Fri';
		case '6.00': return 'Sat';
		case '7.00': return 'Sun';
		default: return '?';
	}
};

// When no HTML is provided, noUiSlider creates an empty <div>
var toolTip = $.Link({
	target: '-tooltip-'
});

// Otherwise, the HTML will be inserted into the handle.
// One level of HTML is supported.
var ttHour = $.Link({
	target: '-tooltip-<div class="tooltip"></div>',
	method: function ( value ) {

		// The tooltip HTML is 'this', so additional
		// markup can be inserted here.
		$(this).html(
			'<span>' + Math.round(value) + '</span>'
		);
	}
});

var ttDay = $.Link({
	target: '-tooltip-<div class="tooltip"></div>',
	method: function ( value ) {

		// The tooltip HTML is 'this', so additional
		// markup can be inserted here.
		$(this).html(
			'<span>' + findDay(value) + '</span>'
		);
	}
});


// invloke the plugin
$("#hours").noUiSlider({
	start: [8, 18],
	step: 1,
	range: {
		'min': [ 0 ],
		'max': [ 23 ]
	},
	connect: true,
	serialization: {
		lower: [ ttHour ],
		upper: [ ttHour ]
	}
});

$("#days").noUiSlider({
	start: [1, 5],
	step: 1,
	range: {
		'min': [ 1 ],
		'max': [ 7 ]
	},
	connect: true,
	serialization: {
		lower: [ ttDay ],
		upper: [ ttDay ]
	}
});
