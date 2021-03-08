const assertEqual = require('./assertEqual');

const head = function (ary) {
  return ary[0]
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

