var assert = require('chai').assert,
	sinon = require('sinon'),
	StringCalculator = require('../libs/stringCalculator');

suite('test project', function() {
	setup(function() {
		this.stringCalculator = new StringCalculator();
	});

	test('test add method with empty string', function() {
		assert.equal(this.stringCalculator.add(''), 0, 'empty string should result 0');
	});

	test('test addition with one number', function() {
		assert.equal(this.stringCalculator.add('1'), 1, 'result should be 1');
	});

	test('test addition with two numbers', function() {
		assert.equal(this.stringCalculator.add('1,2'), 3, 'result should be 3');
	});

	teardown(function() {
	});
});
