/*
* @Author: Manraj Singh
* @Date:   2016-06-15 21:53:33
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-18 20:31:57
*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HackerRank = function () {
  function HackerRank(apiKey) {
    _classCallCheck(this, HackerRank);

    this._runURL = constants.RUN_URL;
    this._langURL = constants.LANG_URL;
    this._apiKey = apiKey;
  }

  _createClass(HackerRank, [{
    key: 'getQuery',
    value: function getQuery(_ref, api_key) {
      var source = _ref.source;
      var lang = _ref.lang;
      var testcases = _ref.testcases;

      return {
        api_key: api_key,
        source: source,
        lang: parseInt(lang),
        testcases: testcases
      };
    }
  }, {
    key: 'getLanguages',
    value: function getLanguages(callback) {
      (0, _request2.default)({ url: this._langURL }, function (error, response) {
        if (!error && response.statusCode === 200) {
          callback(null, response);
        } else {
          callback(error, null);
        }
      });
    }
  }, {
    key: 'postRun',
    value: function postRun(queryData, callback) {
      _request2.default.post({ url: this._runURL, form: queryData }, function (error, response) {
        if (error) {
          callback(error, null);
        } else {
          callback(null, response);
        }
      });
    }
  }, {
    key: 'run',
    value: function run(config, callback) {
      var queryData = this.getQuery(config, this._apiKey);
      return this.postRun(queryData, callback);
    }
  }, {
    key: 'runURL',
    get: function get() {
      return this._runURL;
    }
  }, {
    key: 'langURL',
    get: function get() {
      return this._langURL;
    }
  }, {
    key: 'apiKey',
    get: function get() {
      return this._apiKey;
    }
  }]);

  return HackerRank;
}();

module.exports = HackerRank;