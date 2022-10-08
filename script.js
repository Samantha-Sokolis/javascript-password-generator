alert("Confirm password requirements before clicking the generate password button, or a random selection will be chosen for you");

// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

//Array specifcations for each of the character requirements
const numbers = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = "`~!@#$%^&*()_-+={[}]|\:;'<,>.?/";

// User Input - uncheck or leave checkbox as is
const numbersInput = document.getElementById("numbers");
const lowercaseInput = document.getElementById("lowerCase");
const uppercaseInput = document.getElementById("upperCase");
const specalcharInput = document.getElementById("specialChar");

// Main function - generate a password
function generatePassword() {
   // a new array will be created with the below selections of checked or unchecked boxes
  finalPassword = "";

    if (numbersInput.checked){
      finalPassword += numbers
    }

    if (lowercaseInput.checked) {
      finalPassword += lowerCase
    }

    if (uppercaseInput.checked) {
      finalPassword += upperCase
    }

    if (specalcharInput.checked) {
      finalPassword += specialChar
    }

  return finalPassword;

//Function added below to return password after all password criteria have been accepted
  //return passwordCriteria.generatePassword();
}

   // Object contains all variables for each criteria //
  //const passwordLength = window.prompt("Password Length. Enter a number between 8 and 128 characters");
  //const lowercase = window.confirm("Include lowercase characters");
  //const uppercase = window.confirm("Include uppercase characters");
  //const numericSpecial = window.confirm("Include numeric and/or special characters");