(function($, window) {

	var logo = $('#logo');
	var logoLetters = $('td', logo);
	logoLetters.removeClass('pulse');

	var delay = 1000;
	var letterAnimationOrder = randomOrder(logoLetters.length);
	for (var i = 0; i < logoLetters.length; i++) {
		setTimeout((function(letterIndex) {
			return function() {
				$(logoLetters[letterIndex]).addClass('pulse');
			}
		})(letterAnimationOrder[i]), delay * i);
	}

	function randomOrder(n) {
		var integerLookup = {};
		var integerKeys = [];
		var shuffledIntegers = [];
		for (var i = 0; i < n; i++) {
			var uniform = Math.random();
			integerLookup[uniform] = i;
			integerKeys.push(uniform);
		}

		integerKeys.sort();
		for (var i = 0; i < n; i++) {
			shuffledIntegers.push(integerLookup[integerKeys[i]]);
		}
		return shuffledIntegers;
	}

})(jQuery, window);