# HackerRank API Node Wrapper
[![npm version](https://badge.fury.io/js/hackerrank-node-wrapper.svg)](https://www.npmjs.com/package/hackerrank-node-wrapper) [![npm](https://img.shields.io/npm/dt/hackerrank-node-wrapper.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/hackerrank-node-wrapper) ![awesome](https://img.shields.io/badge/awesome-yes-green.svg)

> Node wrapper for HackerRank API

This library enables compiling and running code and also fetching languages available using [HackerRank API](https://www.hackerrank.com/api/docs).

## Install

```
$ npm install hackerrank-node-wrapper
```

## API Key

You can get your HackerRank API Key by visiting [HackerRank API](https://www.hackerrank.com/api/docs) page.

## Usage

### Methods available

* `runURL` : Get Run URL
* `langURL` : Get Language URL
* `apiKey` : Get API Key
* `getLanguages( callback )` : Returns languages as a response from HackerRank
* `run ( config, callback )` : Returns response as a callback from HackerRank after running the code on testcases provided

### Config

Config should be an object containing following properties:

* `source` : This is your source code to be executed
* `lang` : This should be a number corresponding to language to be set for source code
* `testcases`: This should be a JSON list of strings, each string being a test case

## How to use

### Getting Languages

```javascript
import HackerRank from 'hackerrank-node-wrapper';

const hr = new HackerRank('yourApiKey');

hr.getLanguages((error, response) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(response.body);
  }
});
```

### Running Code

```javascript
import HackerRank from 'hackerrank-node-wrapper';

const hr = new HackerRank('yourApiKey');

let data = {
  source: 'print "Hello World"',
  lang: 5,
  testcases: '["1"]'
};

hr.run(data, (error, response) => {
  if(error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(response.body);
  }
});
```

## License

[MIT](https://github.com/ManrajGrover/HackerRank-Node-Wrapper/blob/master/LICENSE) © [Manraj Singh](https://github.com/ManrajGrover)
