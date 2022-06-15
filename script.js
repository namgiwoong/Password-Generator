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
  var length = prompt("Choose number of characters you want in your password");

  var userNumber;
  var userSpecialcharacter;
  var userLowercase;
  var userUppercase;

  //Validate the password length and make sure it's a number between or equal to 8 and 128
  //IF 'passwordLength' greater than or equal to 8 and 'passwordLength' less than or equal to 128

  if (length >= 8 && length <= 128) {
    // Prompt the user for if they want special characters and store it in a variable

    userNumber = confirm("Do you want to include numbers?");

    // Prompt the user for if they want numbers and store it in a variable

    userSpecialcharacter = confirm(
      "Do you want to include Special characters?"
    );

    // Prompt the user for if they want lowercase and store it in a variable

    userLowercase = confirm("Do you want to include Lowercase letters?");

    // Prompt the user for if they want uppercase and store it in a variable

    userUppercase = confirm("Do you want to include Uppercase letters?");
  }
  //IF 'passwordLength' less than 8 OR greater than 128;
  //end the function early: return;
  else if (length < 8 || length > 128) {
    alert("Number of characters must be between or equal to 8 to 128");
    return "";
  }

  // validate that at least one character choice is true
  // if (!storeCharacter && !storeNumber && !storeLowercase && !storeUppercase) {
  // Alert the user they had bad data (need to choose at least one character)
  //   return "";
  // }

  if (
    !userNumber &&
    !userSpecialcharacter &&
    !userLowercase &&
    !userUppercase
  ) {
    alert("Need to choose at least one character choice");
    return "";
  }

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
