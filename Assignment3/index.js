function transformString(inputString) {
  let outputString = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString.charAt(i);
    outputString += char.toUpperCase();
    for (let j = 0; j < i; j++) outputString += char.toLowerCase();
    if (i < inputString.length - 1) outputString += "-";
  }
  return outputString;
}

console.log(transformString("ab"));
console.log(transformString("abc"));
console.log(transformString("dkjb"));
