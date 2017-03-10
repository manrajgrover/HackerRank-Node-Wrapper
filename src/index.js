const constants = require('./constants');
const request = require('request');


class HackerRank {
  constructor(apiKey) {
    this.runURL = constants.RUN_URL;
    this.langURL = constants.LANG_URL;
    this.apiKey = apiKey;
  }

  get runURL() {
    return this.runURL;
  }

  get langURL() {
    return this.langURL;
  }

  get apiKey() {
    return this.apiKey;
  }

  static getQuery({ source, lang, testcases }, apiKey) {
    return {
      apiKey,
      source,
      lang: parseInt(lang),
      testcases,
    };
  }

  getLanguages(callback) {
    request({ url: this.langURL }, (error, response) => {
      if (!error && response.statusCode === 200) {
        callback(null, response);
      } else {
        callback(error, null);
      }
    });
  }

  postRun(queryData, callback) {
    request.post({ url: this.runURL, form: queryData }, (error, response) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, response);
      }
    });
  }

  run(config, callback) {
    const queryData = this.getQuery(config, this.apiKey);
    return this.postRun(queryData, callback);
  }
}

module.exports = HackerRank;
