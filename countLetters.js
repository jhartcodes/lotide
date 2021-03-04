const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:"${actual} !==  ${expected}`);
  }
};

let countLetters = function(sentence) {
 const numberOfLetters = {} 
 // .replace regax to remove ' ' 
 sentence = sentence.replace(/\s/g,'') 
  for(letter of sentence) {
    if(numberOfLetters[letter]) {
      numberOfLetters[letter] += 1;
      } else {
      numberOfLetters[letter] = 1;
      }
    }
  return numberOfLetters;
}
console.log(countLetters('cat in the hat')); 