//Sixth assignment:
//Create a function that takes in 2 arguments. The first argument is an array
// and the second argument takes in a value.
//The function should push whatever value from the 2nd arguments into the array
//and return the modified array

function addValue(myArray, b) {
  let newArray = [];
  var newArray = myArray.push(b);
  return newArray;
}

addValue(myArray, b);
