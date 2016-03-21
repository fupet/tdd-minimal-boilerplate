/**
 * StringCalculator.
 *
 * @constructor
 */
var StringCalculator = function() {

};

StringCalculator.prototype.add = function(numbers) {
	var sum = 0,
		delimiter = new RegExp(/,|\n/);
	if (numbers === '') {
		return sum;
	}
	if (/^\D\n/.test(numbers)) {
		delimiter = numbers.match(/^(\D)\n/)[1];
		numbers = numbers.substr(numbers.indexOf('\n'));
	}
	numbers.split(delimiter).forEach(function(number) {
		sum += parseInt(number, 10);
	});
	return sum;
};

module.exports = StringCalculator;
