//storing all needed characters in variables

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "~",
  "_",
  "-",
  "=",
  "+",
  "[",
  "]",
  ";",
  ":",
  "'",
  "{",
  "}",
];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//What sorts of tasks does my code need to complete

// Generate Password
function generatePassword() {
  // 'Prompt' the user for their 'passwordLength' and store it in a variable
  length = prompt("Choose number of characters you want in your password");

  //Validate the password length and make sure it's a number between or equal to 8 and 128
  if (length >= 8 && length <= 128) {
    confirm("Do you want Uppercase letters?");

    if (length < 8 || length > 128)
      alert("Number of characters must be between or equal to 8 to 128");
  }
  //IF 'passwordLength' greater than or equal to 8 and 'passwordLength' less than or equal to 128

  //IF 'passwordLength' less than 8 OR greater than 128;
  // if () {
  //end the function early
  //   return;
  // }
  // Prompt the user for if they want special characters and store it in a variable
  var userspecialCharacter = false;
  // Prompt the user for if they want numbers and store it in a variable
  var userNumber = false;
  // Prompt the user for if they want lowercase and store it in a variable
  var userLowercase = false;
  // Prompt the user for if they want uppercase and store it in a variable
  var userUppercase = false;
  // validate that at least one character choice is true
  // if (!storeCharacter && !storeNumber && !storeLowercase && !storeUppercase) {
  // Alert the user they had bad data (need to choose at least one character)
  //   return "";
  // }

  //DECLARE a new empty array to store the 'characters' we want to use
  // var ___ = [];

  // var 1 =[];
  // var 2 =[];
  // IF 'specialCharacters' is true
  // combine 'specialCharacters' with 'characters'
  // ___ = ___.concat(1);
  // IF 'numbers' is true
  // ___ = ___.concat(1);

  //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

  // DECLARE a new empty string to store the password characters
  //for( var i=0; i< 'passwordLength'; i++){ newPassword += data[Math.floor(Math.random()*data.)]}

  //Randomly select characters
  //Adding that character to a building password string
  //RETURN the completed string
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
