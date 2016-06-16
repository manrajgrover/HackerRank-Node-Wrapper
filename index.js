/*
* @Author: Manraj Singh
* @Date:   2016-06-15 21:53:33
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-16 19:09:46
*/

'use strict';


import * as constants from './constants'

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
}