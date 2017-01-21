'use strict';

import * as constants from './constants';
import request from 'request';


class HackerRank {
  constructor(apiKey) {
    this._runURL = constants.RUN_URL;
    this._langURL = constants.LANG_URL;
    this._apiKey = apiKey;
  }
  
  get runURL() {
    return this._runURL;
  }

  get langURL() {
    return this._langURL;
  }

  get apiKey() {
    return this._apiKey;
  }

  getQuery({source, lang, testcases}, api_key) {
    return {
      api_key,
      source,
      lang: parseInt(lang),
      testcases
    };
  }

  getLanguages(callback) {
    request({url: this.langURL}, (error, response) => {
      if (!error && response.statusCode === 200) {
        callback(null, response);
      } else {
        callback(error, null);
      }
    });
  }

  postRun(queryData, callback) {
    request.post({ url : this.runURL, form : queryData}, (error, response) => {
      if(error){
        callback(error, null);
      }
      else{
        callback(null, response);
      }
    });
  }

  run(config, callback) {
    let queryData = this.getQuery(config, this.apiKey);
    return this.postRun(queryData, callback);
  }
}

module.exports = HackerRank;
