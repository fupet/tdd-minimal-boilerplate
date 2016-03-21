var assert = require('chai').assert,
	sinon = require('sinon'),
	_ = require('underscore'),
	StringCalculator = require('../libs/stringCalculator');

suite('test project', function() {
	setup(function() {
		this.stringCalculator = new StringCalculator();
		this._dataProvider = {
			''              : 0,
			'1'             : 1,
			'0,1,2'         : 3,
			'0,1,2,3,4,5'   : 15,
			'21,12,30,43,5' : 111
		};
	});

	test('test multiple additions', function() {
		_.each(this._dataProvider, function(testResult, testValue) {
			assert.equal(this.stringCalculator.add(testValue), testResult, 'not equal');
		}, this);
	});

	test('test new line separator', function() {
		assert.equal(this.stringCalculator.add('1\n2,3'), 6, 'not equal');
	});

	teardown(function() {
	});
});
