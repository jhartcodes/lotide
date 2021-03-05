const takeUntil = function (array, callback) {
  // create a local array  that stores the values in the array that didn't satisfy the callback
  let arr = [];
  for (let item of array) {
    if (!callback(item)) {
      arr.push(item);
    } else {
      break;
    }
  }
  return arr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// return a slice() of array with elements at the begniing taken out.
// The location is predicated on when the callback function returns a truthy value// the value the callback is checking is the items in teh array
//loop threw data 1 or data 2. and call a callback in each entry if it evaluates to true 