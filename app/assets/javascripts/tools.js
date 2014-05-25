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
},

findHour = function(num) {
	switch(num) {
		case '0.00': return '12am';
		case '1.00': return '1am';
		case '2.00': return '2am';
		case '3.00': return '3am';
		case '4.00': return '4am';
		case '5.00': return '5am';
		case '6.00': return '6am';
		case '7.00': return '7am';
		case '8.00': return '8am';
		case '9.00': return '9am';
		case '10.00': return '10am';
		case '11.00': return '11am';
		case '12.00': return '12pm';
		case '13.00': return '1pm';
		case '14.00': return '2pm';
		case '15.00': return '3pm';
		case '16.00': return '4pm';
		case '17.00': return '5pm';
		case '18.00': return '6pm';
		case '19.00': return '7pm';
		case '20.00': return '8pm';
		case '21.00': return '9pm';
		case '22.00': return '10pm';
		case '23.00': return '11pm';
		case '24.00': return '12am';
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
			'<span>' + findHour(value) + '</span>'
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
