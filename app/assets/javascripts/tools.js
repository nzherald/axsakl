$("#hours").noUiSlider({
	start: [8, 18],
	step: 1,
	range: {
		'min': [ 0 ],
		'max': [ 23 ]
	},
	connect: true
});

$("#days").noUiSlider({
	start: [1, 5],
	step: 1,
	range: {
		'min': [ 1 ],
		'max': [ 7 ]
	},
	connect: true
});