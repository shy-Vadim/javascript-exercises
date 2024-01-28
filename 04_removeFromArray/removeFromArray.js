const removeFromArray = function() {
  let arrayOfWords = arguments[0];
  for (i = 1 ; i < arguments.length ; i++) {
    arrayOfWords = arrayOfWords.filter((a) => a !== arguments[i])
  }
  return arrayOfWords;
};

// Do not edit below this line
module.exports = removeFromArray;
