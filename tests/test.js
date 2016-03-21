var assert = require('chai').assert,
	sinon = require('sinon'),
	StringCalculator = require('../libs/stringCalculator');

suite('test project', function() {
	setup(function() {
		this.stringCalculator = new StringCalculator();
	});

	test('add method', function() {
		assert.equal(this.stringCalculator.add(''), 0, 'return 0 for empty string')
	});

	teardown(function() {
	});
});
