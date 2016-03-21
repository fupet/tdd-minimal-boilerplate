/**
 * StringCalculator.
 *
 * @constructor
 */
var StringCalculator = function() {
	this._defaultDelimiter = new RegExp(/,|\n/);
};

StringCalculator.prototype.add = function(numbers) {
	var sum = 0,
		delimiter = this._defaultDelimiter;
	if (numbers === '') {
		return sum;
	}
	if (/^\D\n/.test(numbers)) {
		delimiter = numbers.match(/^(\D)\n/)[1];
		numbers = numbers.substr(numbers.indexOf('\n'));
	}

	numbers.split(delimiter).forEach(function(number) {
		var add = parseInt(number, 10);
		if (add < 0) {
			throw new Error('negatives not allowed');
		}
		sum += add;
	});
	return sum;
};

module.exports = StringCalculator;
