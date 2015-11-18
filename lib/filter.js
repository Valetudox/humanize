'use strict';

var SUFFIXES = ['', 'k', 'M', 'B', 'T', 'Q'];
var round = require('./round');

module.exports = function(number, precision) {
  let stringify = function(num) { return round(num, precision).toString(); };

  if (precision === undefined) precision = 1;
  if (!number) return '0';
  if (number > -1 && number < 1) return stringify(number);

  var suffixIndex = Math.floor(Math.log(Math.abs(number)) / Math.log(1000));
  var value = number / Math.pow(1000, suffixIndex);

  return stringify(value) + SUFFIXES[suffixIndex];
};
