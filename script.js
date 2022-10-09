// First prompt- alert- on opening browser
alert("Confirm password requirements before clicking the generate password button, or a random selection will be chosen for you");

//Second prompt requires user input
var lengthPrompt = prompt("Please enter your password length. Must be between 8 - 128 characters");
//var println = (lengthPrompt);

// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  passwordText.value = password;
}

//Array specifcations for each of the character requirements
const passwordLength = {from: 8, to: 120};
const numbers = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = "`~!@#$%^&*()_-+={[}]|\:;'<,>.?/";

// User Input - uncheck or leave checkbox as is
//const passwordLengthInput = document.querySelector(lengthPrompt);
const numbersInput = document.getElementById("numbers");
const lowercaseInput = document.getElementById("lowerCase");
const uppercaseInput = document.getElementById("upperCase");
const specalcharInput = document.getElementById("specialChar");

// Main function - generate a password
function generatePassword() {
   // random password output regardless of user input
  randomPassword = "";
// a new array will be created with the below selections of checked or unchecked boxes
  finalPassword =[];

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
//password length input here, password length variable assigned above
    for (let i = 0; i < Number(passwordLength); i++){

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

  