// //Third assignment:

// Create a function that takes in 1 argument which is a string
// If the string length is greater than or equal to 5, return the string 'This word is long'
// If the string length is lesser than 5, return the string 'This word is short'

function myString(string) {
  const myStringLength = string.length;
  if (myStringLength >= 5) {
    return "This word is long";
  } else if (myStringLength < 5) {
    return "This word is short";
  }
}

myString("My name is Stephen");
console.log(myString("My name is Stephen"));
