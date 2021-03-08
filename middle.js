const middle = function (arr) {
  let newArray = [];
  if (arr.length < 3) {
    return newArray;
  } else if (arr.length % 2 === 1) {
    newArray.push(arr[(arr.length / 2) - .5]);
  } else if (arr.length % 2 === 0) {
    newArray.push(arr[(arr.length / 2) - 1]);
    newArray.push(arr[(arr.length / 2)]);
  }
  return newArray;
};

module.exports = middle