'use strict';

module.exports = function(number, precision) {
  let rounder = Math.pow(10, precision);
  return Math.round(number * rounder) / rounder;
};
