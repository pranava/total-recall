(function($, window) {

	function NBack(n, sumCount) {
		this.n = n;
		this.sumCount = sumCount || 10;
		this.pairs = [];
		this.displayedSumIndex = 0;

		this.generatePairs();
	}

	NBack.prototype.generatePairs = function() {
		for (var i = 0; i < this.sumCount; i++) {
			var num1 = Math.floor(Math.random * 10);
			var num2 = Math.floor(Math.random * 10);

			this.pairs.push([num1, num2]);
		}
	}

	NBack.prototype.getDisplaySum = function() {
		return this.pairs[this.displayedSumIndex];
	}

	NBack.prototype.checkInputSum = function(userValue) {
		var index = this.displayedSumIndex - this.n;
		var requiredSumPairs = this.pairs[index];
		var requiredValue = (requiredSumPairs[0] + requiredSumPairs[1]) % 10;

		return (requiredValue === userValue);
	}

	NBack.prototype.incrementSumIndex = function() {
		this.displayedSumIndex += 1;
	}

	function NBackDriver(screen) {
		// Do shit.
	}

})(jQuery, window);