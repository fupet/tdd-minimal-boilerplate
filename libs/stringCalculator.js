/**
 * StringCalculator.
 *
 * @constructor
 */
var StringCalculator = function() {

};

StringCalculator.prototype.add = function(numbers) {
	var sum = 0;
	if (numbers === '') {
		return sum;
	}
	numbers.split(',').forEach(function(number) {
		sum += parseInt(number, 10);
	});
	return sum;
};

module.exports = StringCalculator;
