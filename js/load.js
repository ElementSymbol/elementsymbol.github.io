var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 1500,
	strokeWidth: 2,
	color: '#1ac793',
	trailWidth: 0.2,
	trailColor: '#bbb',
	text: {
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'4rem',
			color: '#000',
		},
		autoStyleContainer: false
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});


bar.animate(1.0, function () {
	$("#splash").delay(500).fadeOut(800);
});