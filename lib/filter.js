'use strict';

var SUFFIXES = ['', 'k', 'M', 'B', 'T', 'Q'];
var round = require('./round');

module.exports = function(number, precision) {
  if (precision === undefined) precision = 1;
  if (!number) return '0';
  if (number > -1 && number < 1) return number.toString();

  var suffixIndex = Math.floor(Math.log(Math.abs(number)) / Math.log(1000));
  var value = number / Math.pow(1000, suffixIndex);

  return round(value, precision).toString() + SUFFIXES[suffixIndex];
};
