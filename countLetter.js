function countLetters(inputString) {
  var outputObject = {};
  for (var i = 0; i < inputString.length; i ++) {
    var character = inputString[i];
    if (character in outputObject) {
      outputObject[character] = outputObject[character] + 1
    } else {
      if (character != " ") {
      outputObject[character] = 1
    }
    }
  }
  return outputObject;
}
var result = countLetters("lighthouse in the house")
console.log(result)