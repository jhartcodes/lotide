const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:"${actual} !==  ${expected}`);
  }
};

const eqArrays = function (listOne, listTwo) {
  if (listOne.length === listTwo.length) {
    for (let i = 0; i < listOne.length; i++) {
      if (listOne[i] !== listTwo[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const eqObjects = function (object1, object2) {
  if ((Object.keys(object1)).length !== (Object.keys(object2)).length) {
    return false
  }
  for (key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      eqArrays(object1, object2)
    }
    else if (object1[key] !== object2[key]) {
      return false
    }
  } return true
}



assertEqual(eqObjects(cd, dc), true); // => true

assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects(ab, ba), true); // => true
// assertEqual(eqObjects(ab, abc), false); // => false



