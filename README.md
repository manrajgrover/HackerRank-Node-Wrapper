# HackerRank API Node Wrapper

Node wrapper for HackerRank API

This library enables compiling and running code and also fetching languages available using [HackerRank API](https://www.hackerrank.com/api/docs).

## Install

```
$ npm install hackerrank-node-wrapper
```

## API Key

You can get your HackerRank API Key by visiting [HackerRank API](https://www.hackerrank.com/api/docs) page.

## Usage

### Methods available

* `_runURL` : Get Run URL
* `_langURL` : Get Language URL
* `_apiKey` : Get API Key
* `getLanguages( callback )` : Gets and returns languages response from HackerRank
* `run ( config, callback )` : Posts and returns response to callback from HackerRank after running the code on testcases provided

### Config

Config should be an object containing following properties:

* `source` : This is your source code to be executed
* `lang` : This should be a number corresponding to language to be set for source code
* `testcases`: This should be a JSON list of strings, each string being a test case

## How to use

### Getting Languages

```javascript
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
```

### Running Code

```javascript
import HackerRank from 'hackerrank-node-wrapper';

var hr = new HackerRank('yourApiKey');

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
```

## License

MIT © [Manraj Singh](https://github.com/ManrajGrover)
