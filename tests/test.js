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

	teardown(function() {
	});
});
