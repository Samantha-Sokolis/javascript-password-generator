// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// passwordCriteria Object contains all variables for each criteria
function generatePassword() {
 // passwordCriteria.passwordLength();
 // passwordCriteria.lowercase();
 // passwordCriteria.uppercase();
//passwordCriteria.numericCharacters();
// passwordCriteria.specialCharacters();
  alert("Confirm password requirements");

  /* Object contains all variables for each criteria */
  var passwordLength = window.prompt("Password Length. Enter a number between 8 and 128 characters");
  var lowercase = window.confirm("Include lowercase characters");
  var uppercase = window.confirm("Include uppercase characters");
  var numericSpecial = window.confirm("Include numeric and/or special characters");

  var finalPassword = "xyz"
  if (lowercase){
    finalPassword += "l"
  }

  if (uppercase) {
    finalPassword += "L"
  }

  if (numericSpecial) {
    finalPassword += "1%"
  }


  return finalPassword

//Function added below to return password after all password criteria have been accepted
  //return passwordCriteria.generatePassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);