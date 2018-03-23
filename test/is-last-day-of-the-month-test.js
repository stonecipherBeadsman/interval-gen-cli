var isLastDayOfTheMonth = require("../Helper/isLastDayOfTheMonth.js");
var monthEngine = require("../Helper/monthEngine.js");
var assert = require('chai').assert;
var should = require('chai').should();

var tests = [];
var test = {}
var daysInCurrentMonth;
var results = [];
for (var year = 2016; year < 2017; year++) {
	for (var month = 1; month <= 3; month++) {
		daysInCurrentMonth = monthEngine(year, month)
		for (var day = 1; day <= daysInCurrentMonth; day++) {
			test.arguments = [day, daysInCurrentMonth, (daysInCurrentMonth - day)];
			test.expected = /*day === (daysInCurrentMonth -1) || */(daysInCurrentMonth - day) === 0 ? true : false;
			test.testLable = year + ' ' + month + ' ' + daysInCurrentMonth + ' - ' + day + ' = ' + test.expected;
			tests.push(test);
			test = {};
		}
	}
}

describe('isLastDayOfTheMonth Test', function(){
	tests.forEach(function(test){
		it(test.testLable, function(){
			var returnedData = isLastDayOfTheMonth.apply(null, test.arguments);
			assert.equal(returnedData, test.expected);		
		});
	});
	
});