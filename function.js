// First assignment:

// Create me a function that takes in 2 arguments which are numbers
// If the first argument is greater than the 2nd, it should return a string 'First number is greater than second number'
// Else if the second argument is greater than the 1st, it should return a string 'Second number is greater than the first number'
// // Else it should return a string 'The numbers are the same'

function numberComparison(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    let result = "first number is greater than second number";
    return result;
  } else if (secondNumber > firstNumber) {
    let result = "second number is greater than first number";
    return result;
  } else {
    let result = "the numbers are the same";
    return result;
  }
}
numberComparison(firstNumber, secondNumber);
