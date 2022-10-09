alert("Confirm password requirements before clicking the generate password button, or a random selection will be chosen for you");

prompt("Please enter your password length. Must be between 8 - 128 characters");

const passwordLength = {from: 8, to: 120};
if (passwordLength != null) {
  prompt("You must enter your password length. (Between 8 - 128 characters)");
}

// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  passwordText.value = password;
}

//Array specifcations for each of the character requirements

const numbers = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = "`~!@#$%^&*()_-+={[}]|\:;'<,>.?/";

// User Input - uncheck or leave checkbox as is
const passwordLengthInput = {from: 8, to: 120};
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

}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);  

   // Object contains all variables for each criteria //
  //const passwordLength = window.prompt("Password Length. Enter a number between 8 and 128 characters");
  //const lowercase = window.confirm("Include lowercase characters");
  //const uppercase = window.confirm("Include uppercase characters");
  //const numericSpecial = window.confirm("Include numeric and/or special characters");