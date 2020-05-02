//Fifth assignment:
//Create a function that takes in array of numbers.
//The function should multiply all elements of the array by 2
//and return the modified array

function multiplyAll(myArray) {
  let newArray = [];
  for (var i = 0; i < myArray.length; i++) {
    newArray.push(myArray[i] * 2);
  }
  return newArray;
}
