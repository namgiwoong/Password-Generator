//storing all needed characters in variables

//numbers
var numbers = ["1", "2", "3", "4"];

//special characters
var specialCharacters = ["!", "@", "#"];

//lower case letters
var specialCharacters = ["a", "b", "c"];

//uppercase letters

//What sorts of tasks does my code need to complete

// Generate Password
function generatePassword() {
  // Prompt the user for their passowrd length and store it in a variable
  //Validate the password length and make sure it's a number between or equal to 8 and 128
  // Prompt the user for if they want special characters and store it in a variable
  //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
