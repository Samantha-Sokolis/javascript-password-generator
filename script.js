// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for each criteria added below as, password length as prompt, characters as confirm.
var passwordLength = window.prompt("Password Length. Enter a number between 8 and 128 characters");
var lowercase = window.confirm("Include lowercase characters");
var uppercase = window.confirm("Include uppercase characters");
var numericSpecial = window.confirm("Include numeric and/or special characters");

// if (passwordLength < 8 && passwordLength < 128 ) {
//  } else {
//  return window.alert("Incorrect entry. Try again")
//  }

//Function added below to return password after all password criteria have been accepted
function generatePassword() {
  return ("password");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);