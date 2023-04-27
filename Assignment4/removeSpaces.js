// Remove String Spaces
//     Write a function that removes the spaces from the string, then return the resultant string.

//     Examples:
//     Input -> Output
//     "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
//     "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
//     "8aaaaa dddd r     " -> "8aaaaaddddr"

function removeSpaces(string){
  let output = '';
  for (let i = 0; i < string.length; i++){
    if (string[i] != ' '){
      output += string[i];
    }
  }
  return output;
}

console.log(removeSpaces("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(removeSpaces("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(removeSpaces("8aaaaa dddd r     "));
