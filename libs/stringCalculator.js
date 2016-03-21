/**
 * StringCalculator.
 *
 * @constructor
 */
var StringCalculator = function() {
	this._defaultDelimiter = new RegExp(/,|\n/);
	this._delimiterTest = new RegExp(/^\D\n|^\[\D+\]\n/);
	this._delimiterParser = new RegExp(/^(\D)\n|^\[(\D+)\]\n/);
	this._delimiter = this._defaultDelimiter;
};

StringCalculator.prototype.add = function(numbers) {
	var sum = 0;
	if (numbers === '') {
		return sum;
	}

	numbers = this._parseDelimiter(numbers);

	numbers.split(this._delimiter).forEach(function(number) {
		var add = parseInt(number, 10);
		if (add < 0) {
			throw new Error('negatives not allowed');
		}
		if (add <= 1000) {
			sum += add;
		}
	});
	return sum;
};

StringCalculator.prototype._parseDelimiter = function(numbers) {
	if (this._delimiterTest.test(numbers)) {
		this._delimiter = numbers.match(this._delimiterParser);
		this._delimiter = this._delimiter[1] || this._delimiter[2];
		numbers = numbers.substr(numbers.indexOf('\n'));
	}
	return numbers;
};

module.exports = StringCalculator;
