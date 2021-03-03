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

const middle = function(arr) {
  let newArray = [];
  if (arr.length < 3) {
    return newArray;
  } else if (arr.length % 2 === 1) {
    newArray.push(arr[(arr.length / 2) - .5]);
  } else if (arr.length % 2 === 0) {
    newArray.push(arr[(arr.length / 2)- 1]);
    newArray.push(arr[(arr.length / 2)]);
  }
  return newArray;
};

assertArraysEqual(middle([1]),[])
assertArraysEqual(middle([1, 2]),[])
assertArraysEqual(middle([1, 2, 3]),[2])
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])
assertArraysEqual(middle([1, 2, 3, 4]),[2,3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4])