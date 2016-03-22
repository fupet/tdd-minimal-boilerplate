/**
 * StringCalculator.
 *
 * @constructor
 */
var StringCalculator = function() {
	this._defaultDelimiter = /,|\n/;
	this._delimiterTest = /^\D\n|^\[\D+\]\n/;
	this._delimiterParser = /^(\D)\n|^\[(\D+)\]\n/;
	this._mulitpleDelimiterTester = /\[(\D+?)\]/;
	this._mulitpleDelimiterParser = /\[(\D+?)\]/g;
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
	if (this._mulitpleDelimiterTester.test(numbers)) {
		var match = null, delimiters = [];
		while ((match = this._mulitpleDelimiterParser.exec(numbers)) != null) {
			delimiters.push(escapeRegExp(match[1]));
		}
		this._delimiter = new RegExp(delimiters.join('|'));
		numbers = numbers.substr(numbers.indexOf('\n'));
	}
	else if (this._delimiterTest.test(numbers)) {
		this._delimiter = numbers.match(this._delimiterParser);
		this._delimiter = this._delimiter[1] || this._delimiter[2];
		numbers = numbers.substr(numbers.indexOf('\n'));
	}
	return numbers;
};

function escapeRegExp(string){
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

module.exports = StringCalculator;
