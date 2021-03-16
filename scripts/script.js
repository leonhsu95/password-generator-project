// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character Variables stored in Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function writePassword(){
  var generatePassword = prompt("How many charcters between 8-128 would you like your password to be?");

  if (!generatePassword) {
    var cancel = confirm("Cancel Password Generation?");

    if (cancel) {
      alert("Password Generation cancelled.");
      return;
    }
    else {
      var generatePassword = prompt("How many charcters between 8-128 would you like your password to be?");
    }
  }
  else if (generatePassword < 8 || generatePassword > 128 ) {
    alert("Password length must be between 8-128 characters. Try again");
    var generatePassword = prompt("How many charcters between 8-128 would you like your password to be?");
    
  }
  else {
    alert("Your password will have "+generatePassword+" characters.");
    
  }
  
};

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
