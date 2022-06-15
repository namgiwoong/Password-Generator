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

// Generate Password
function generatePassword() {
  // 'Prompt' the user for their 'passwordLength' and store it in a variable

  var passwordLength;
  var userNumber;
  var userSpecialcharacter;
  var userLowercase;
  var userUppercase;

  //Validate the password length and make sure it's a number between or equal to 8 and 128
  //IF 'passwordLength' greater than or equal to 8 and 'passwordLength' less than or equal to 128
  var passwordLength = prompt(
    "Choose number of characters you want in your password"
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    // Prompt the user for if they want numbers and store it in a variable

    userNumber = confirm("Do you want to include numbers?");

    // Prompt the user for if they want special characters and store it in a variable

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
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Number of characters must be between or equal to 8 and 128");
    return "";
  }

  // validate that at least one character choice is true
  // if (!userCharacter && !userNumber && !userLowercase && !userUppercase)
  // -Alert the user they had bad data (need to choose at least one character)
  //  -return "";

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
  // var (empty array) = [];
  var userChoice = [];

  // IF 'specialCharacters' is true
  // combine 'specialCharacters' with 'characters'
  // (empty array) = (empty array).concat(character);
  // IF 'numbers' is true
  // ___ = ___.concat(1);

  if (userNumber == true) {
    userChoice = userChoice.concat(numbers);
  }
  if (userSpecialcharacter == true) {
    userChoice = userChoice.concat(specialCharacters);
  }
  if (userLowercase == true) {
    userChoice = userChoice.concat(lowerCase);
  }
  if (userUppercase == true) {
    userChoice = userChoice.concat(upperCase);
  }
  // DECLARE a new empty string to store the password characters
  var randomPassword = "";

  //for( var i=0; i< 'passwordLength'; i++)
  for (var i = 0; i < passwordLength; i++) {
    //Randomly select characters
    //Adding that character to a building password string

    randomPassword = userChoice[Math.floor(Math.random() * userChoice.length)];

    console.log(randomPassword);

    //RETURN the completed string
    return randomPassword;
  }
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
