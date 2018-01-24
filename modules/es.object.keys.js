// 19.1.2.14 Object.keys(O)
var toObject = require('core-js-internals/to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});
