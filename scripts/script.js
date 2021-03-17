// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Character Variables stored in Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function writePassword() {
  var generatePassword = prompt("How many characters between 8-128 would you like your password to be?");

  while (!generatePassword || generatePassword == undefined || isNaN(generatePassword)) {
    alert("Please enter a number.");
    generatePassword = prompt("How many characters between 8-128 would you like your password to be?");
  }
  while (generatePassword < 8 || generatePassword > 128 ) {
    alert("Password length must be between 8-128 characters.");
    generatePassword = prompt("How many characters between 8-128 would you like your password to be?");
  }
  
  alert("Your password will have "+Math.round(generatePassword)+" characters.");

  // Confirm if user wants certain character type variables
  var confirmLowerCase;
  var confirmUpperCase;
  var confirmNumber;   
  var confirmSpecialChar;
    
  while (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSpecialChar) {
    alert("You must choose at least one type of character.");
    confirmLowerCase = confirm("Click OK to confirm if you would like to include lower case characters.");
    confirmUpperCase = confirm("Click OK to confirm if you would like to include upper case characters.");
    confirmNumber = confirm("Click OK to confirm if you would like to include numbers.");    
    confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters.");
  } 
  
  // Password parameters
  var passwordChar = [];

  // Password to keep adding character type onto existing    
  if (confirmLowerCase){
    passwordChar = passwordChar.concat(lowerCase);
  }
  if (confirmUpperCase){
    passwordChar = passwordChar.concat(upperCase);
  }
  if (confirmNumber){
    passwordChar = passwordChar.concat(number);
  }
  if (confirmSpecialChar){
    passwordChar = passwordChar.concat(specialChar);
  }

  // Password must be a string of characters.
   var newPassword = "";
  
  // Array loop for total length of Password desired
  for (let i = 0; i < generatePassword; i++) {

  // Each character type is chosen from variable array and chosen randomly.
  // Since Math.random() chooses decimal numbers between 0 - 1, we want to round down into an integer between 8 - 128
   newPassword = newPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
   passwordText.value = newPassword;

  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
