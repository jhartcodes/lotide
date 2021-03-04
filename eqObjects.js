const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:"${actual} !==  ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  console.log(Object.keys(object1.length))
  if (Object.keys(object1.length) !== Object.keys(object2.length)) {
    return false
  }
  console.log(obect.keys())
  for (Object.keys in object1) {
    if (Object.keys === object1) {

    }
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc),); // => false
assertEqual(ab, ba); // => true

// could this part of the code be wrong im stuck on the first step//
console.log(Object.keys(object1.length))
