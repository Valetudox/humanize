'use strict';

let humanize = require('../lib/filter');

describe('Humanize', function() {

  it('should not add any suffix up until 999', function() {
    this.expect(humanize(0)).to.eql('0');
    this.expect(humanize(1)).to.eql('1');
    this.expect(humanize(449)).to.eql('449');
    this.expect(humanize(999)).to.eql('999');
  });


  it('should add suffix \'k\' for number from 1 000 to 999 999', function() {
    this.expect(humanize(1000)).to.eql('1k');
    this.expect(humanize(1200)).to.eql('1.2k');
    this.expect(humanize(49900)).to.eql('49.9k');
    this.expect(humanize(49999)).to.eql('50k');
    this.expect(humanize(120000)).to.eql('120k');
    this.expect(humanize(999999)).to.eql('1000k');
  });


  it('should add suffix \'m\' for number from 1 000 000 to 999 999 999', function() {
    this.expect(humanize(1000000)).to.eql('1M');
    this.expect(humanize(49900000)).to.eql('49.9M');
    this.expect(humanize(49999999)).to.eql('50M');
    this.expect(humanize(999999999)).to.eql('1000M');
  });


  it('should add suffix \'b\' for number from 1 000 000 000 to 999 999 999 999', function() {
    this.expect(humanize(1000000000)).to.eql('1B');
    this.expect(humanize(49900000000)).to.eql('49.9B');
    this.expect(humanize(49999999999)).to.eql('50B');
    this.expect(humanize(999999999999)).to.eql('1000B');
  });


  it('should gives back 0 if the given value is falsy', function() {
    this.expect(humanize(0)).to.eql('0');
    this.expect(humanize(null)).to.eql('0');
    this.expect(humanize(undefined)).to.eql('0');
    this.expect(humanize(NaN)).to.eql('0');
  });


  it('should work with negative numbers', function() {
    this.expect(humanize(-1)).to.eql('-1');
    this.expect(humanize(-999999999999)).to.eql('-1000B');
  });


  it('should use the given precision', function() {
    this.expect(humanize(49990000, 2)).to.eql('49.99M');
  });

});
