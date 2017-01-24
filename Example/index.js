const HackerRank = require('hackerrank-node-wrapper');

const hr = new HackerRank('yourApiKey');

hr.getLanguages((error, response) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(response.body);
  }
});

const data = {
  source: 'print "Hello World"',
  lang: 5,
  testcases: '["1"]',
};

hr.run(data, (error, response) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(response.body);
  }
});
