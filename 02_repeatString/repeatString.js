const repeatString = function(givenString, timesToRepeat) {
  let stringToReturn = "";
  if (timesToRepeat < 0) {
    stringToReturn = "ERROR";
  }
  for (i = 1 ; i <= timesToRepeat ; i++) {
    stringToReturn += givenString;
  }
  return(stringToReturn);
};

// Do not edit below this line
module.exports = repeatString;
