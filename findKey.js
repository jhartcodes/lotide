const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key
    }
  }
}

const answer = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 1 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)

console.log(answer)
