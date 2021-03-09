const assertEqual = require('../assertEqual');
const tail = require('../tail')
const assert = require('chai').assert;

describe("tail function", () => {
  it("returns 2 for [Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(words), 2);
  });
});
const words = ["Yo Yo", "Lighthouse", "Labs"];

