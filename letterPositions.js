const letterPositions = function (sentence) {
  const results = {};
  sentence = sentence.replace(/\s/g, '');
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions('hello'));

//use for in statement to check my position
//es