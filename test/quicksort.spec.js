const chai = require('chai');
const expect = chai.expect;
const quicksort = require('../quicksort.js');

describe("Quicksort", function() {
  it('should be a function', function() {
    expect(quicksort).to.be.a('function');
  })
})