const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {
  it("returns the middle integer of the string", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
});



  // assertArraysEqual(middle([1]), [])
  // assertArraysEqual(middle([1, 2]), [])
  // assertArraysEqual(middle([1, 2, 3]), [2])
  // assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
  // assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
  // assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);