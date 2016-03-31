const chai = require('chai');
const expect = chai.expect;
const quicksort = require('../quicksort.js');

describe("Quicksort", function() {
  var unsortedArray;
  var sortedArray = [1, 2 , 3, 4, 5];

  beforeEach(function() {
    unsortedArray = [5, 4, 3 , 2, 1]
  })

  it('should be a function', function() {
    expect(quicksort).to.be.a('function');
  })

  it('should take an input Array and apply quicksort', function() {
    quicksort(unsortedArray, 0, unsortedArray.length - 1);
    expect(unsortedArray).to.deep.equal(sortedArray);
  })
})