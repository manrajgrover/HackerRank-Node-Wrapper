'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('./constants');
var request = require('request');

var HackerRank = function () {
  function HackerRank(apiKey) {
    _classCallCheck(this, HackerRank);

    this.runURL = constants.RUN_URL;
    this.langURL = constants.LANG_URL;
    this.apiKey = apiKey;
  }

  _createClass(HackerRank, [{
    key: 'getLanguages',
    value: function getLanguages(callback) {
      request({ url: this.langURL }, function (error, response) {
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
      request.post({ url: this.runURL, form: queryData }, function (error, response) {
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
      var queryData = this.getQuery(config, this.apiKey);
      return this.postRun(queryData, callback);
    }
  }, {
    key: 'runURL',
    get: function get() {
      return this.runURL;
    }
  }, {
    key: 'langURL',
    get: function get() {
      return this.langURL;
    }
  }, {
    key: 'apiKey',
    get: function get() {
      return this.apiKey;
    }
  }], [{
    key: 'getQuery',
    value: function getQuery(_ref, apiKey) {
      var source = _ref.source,
          lang = _ref.lang,
          testcases = _ref.testcases;

      return {
        apiKey: apiKey,
        source: source,
        lang: parseInt(lang),
        testcases: testcases
      };
    }
  }]);

  return HackerRank;
}();

module.exports = HackerRank;