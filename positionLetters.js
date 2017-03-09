function countLetters(inputString) {
  var outputObject = {};
  for (var i = 0; i < inputString.length; i ++) {
    var character = inputString[i];
    if (character in outputObject) {
      outputObject[character].push(i);
    } else {
      if (character != " ") {
       outputObject[character] = [i];
     }
    }
  }
  return outputObject;
}
var result = countLetters("lighthouse in the house")
console.log(result)