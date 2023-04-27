// - Write a `filterBy()` function that will take 2 arguments. 
//         The first argument is an array that will contain any data, the second argument is the data type.
//     - The function must return a new array that will contain all the data that was passed in the 
//     argument, except for those whose type was passed as the second argument. 
//     That is, if you pass the array ['hello', 'world', 23, '23', null] and pass 'string'
//     as the second argument, then the function will return the array [23, null].

function filterBy(arr, type){
  let output = [];
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== type){
      output.push(arr[i]);
    }
  }
  return output;
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));