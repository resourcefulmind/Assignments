function myInput() {
  // to create an input element
  var input = document.createElement("INPUT");

  // set the type attribute
  input.setAttribute("type", "text");

  // set the value to attribute
  input.setAttribute("value", "Always remember why you started");

  // append node to the body
  document.body.appendChild(input);
}
