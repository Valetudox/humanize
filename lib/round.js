'use strict';

module.exports = function(number, precision) {
  var rounder = Math.pow(10, precision);
  return Math.round(number * rounder) / rounder;
};
