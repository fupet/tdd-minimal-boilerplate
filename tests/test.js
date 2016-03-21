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
		this._dataProvider2 = {
			''                  : 0,
			'1'                 : 1,
			'0,1\n2'            : 3,
			'0,1,2\n3,4,5'      : 15,
			'21\n12\n30\n43\n5' : 111
		};
		this._dataProvider3 = {
			';\n1;2'     : 3,
			'*\n2*4*5'   : 11,
			'@\n12@4@15' : 31
		};
		this._dataProvider4 = {
			'[***]\n1***2***3'         : 6,
			'[@a%]\n1@a%2@a%3'         : 6,
			'[@#$%^]\n12@#$%^4@#$%^15' : 31
		};
	});

	test('test multiple additions', function() {
		_.each(this._dataProvider, function(testResult, testValue) {
			assert.equal(this.stringCalculator.add(testValue), testResult, 'not equal');
		}, this);
	});

	test('test new line separator', function() {
		_.each(this._dataProvider2, function(testResult, testValue) {
			assert.equal(this.stringCalculator.add(testValue), testResult, 'not equal');
		}, this);
	});

	test('test custom separator', function() {
		_.each(this._dataProvider3, function(testResult, testValue) {
			assert.equal(this.stringCalculator.add(testValue), testResult, 'not equal');
		}, this);
	});

	test('test negative number', function() {
		assert.doesNotThrow(this.stringCalculator.add.bind(this.stringCalculator, '30,10'), 'negatives not allowed', 'function throws');
		assert.throws(this.stringCalculator.add.bind(this.stringCalculator, '-30,10'), 'negatives not allowed', 'function does not throw');
	});

	test('values over 1000 ignored', function() {
		assert.equal(this.stringCalculator.add('1000,2'), 1002, 'value was greater than 1000');
		assert.equal(this.stringCalculator.add('1001,2'), 2, 'value was greater than 1000');
	});

	test('test any length delimiters', function() {
		_.each(this._dataProvider4, function(testResult, testValue) {
			assert.equal(this.stringCalculator.add(testValue), testResult, 'not equal');
		}, this);
	});

	teardown(function() {
	});
});
