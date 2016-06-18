/*
* @Author: Manraj Singh
* @Date:   2016-06-18 18:33:31
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-18 19:03:14
*/

'use strict';
import HackerRank from 'hackerrank-node-wrapper';

var hr = new HackerRank('yourApiKey');

hr.getLanguages(function(error, response){
	if(error){
		console.log("Error: ", error);
	}
	else{
		console.log(response.body);
	}
});

var data = {
  'source': 'print "Hello World"',
  'lang': 5,
  'testcases': '["1"]'
};

hr.run(data,function(error, response){
	if(error){
		console.log("Error: "+ error);
	}
	else{
		console.log(response.body);
	}
});