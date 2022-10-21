  // First prompt- alert- on opening browser
  alert("Confirm password requirements by clicking the GENERATE PASSWORD button below");

  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  var passwordText = document.querySelector("#password");

  // Write password to the #password input
  function writePassword() {
    const password = generatePassword();
    passwordText.value = password;
  }

  //Array specifcations for each of the character requirements
  var passwordLength = {from: 8, to: 120};
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "`~!@#$%^&*()_-+={[}]|\:;'<,>.?/";

  //const passwordLengthInput = document.querySelector(lengthPrompt);
  var numbersInput = document.getElementById("numbers");
  var lowercaseInput = document.getElementById("lowerCase");
  var uppercaseInput = document.getElementById("upperCase");
  var specalcharInput = document.getElementById("specialChar");

  // Main function - generate a password
  function generatePassword() {
    // random password output regardless of user input
    //var randomPassword = "";
    // a new array will be created with the below selections
    var finalPassword ="";

      // Asks for user input
      var enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

      //password length input here, password length variable assigned above
      //for (let i = 0; i < Number(passwordLength); i++){
      //}

      // First if statement for user validation 
      if (!enter) {
          alert("This needs a value");
      } else if (enter < 8 || enter > 128) {
          // Validates user input
          // Start user input prompts
          enter = parseInt(prompt("You must choose between 8 and 128"));
        } else {
          // Continues once user input is validated
         var numbers = confirm("Will this contain numbers?");
         var specialChar = confirm("Will this contain special characters?");
         var upperCase = confirm("Will this contain Uppercase letters?");
         var lowerCase = confirm("Will this contain Lowercase letters?");
      }
  
    return finalPassword;
  }

  // Add event listener to generate button 
  generateBtn.addEventListener("click", writePassword);  
