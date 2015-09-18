'use strict';

const SUFFIXES = ['', 'k', 'M', 'B', 'T', 'Q'];
let round = require('./round');

module.exports = function(number, precision) {
  if (precision === undefined) precision = 1;
  if (!number) return '0';

  let suffixIndex = Math.floor(Math.log(Math.abs(number)) / Math.log(1000));
  let value = number / Math.pow(1000, suffixIndex);

  return round(value, precision).toString() + SUFFIXES[suffixIndex];
};
