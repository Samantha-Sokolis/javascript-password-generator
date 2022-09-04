// Assignment Code
var generateBtn = document.querySelector("#generate");

//added below - this needs to pop up when 'generate password' button is clicked
// OR function needs to be added here On click - 1st pop up appears
function displayMessage() {
  document.getElementById("generate");
}

var generateBtn = window.prompt("Select your password criteria")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);