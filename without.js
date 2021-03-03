const eqArrays = function(listOne, listTwo) {
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

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} != ${arrTwo}`);
  }
};
assertArraysEqual([1,2,3],[1,2,3]);

const without = function(arr1, arr2) {
  let fixed = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      fixed.push(arr1[i])
    }
  }
  return fixed
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
