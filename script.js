  // First prompt- alert- on opening browser
  alert("Confirm password requirements by clicking the GENERATE PASSWORD button below");

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

  //const passwordLengthInput = document.querySelector(lengthPrompt);
  const numbersInput = document.getElementById("numbers");
  const lowercaseInput = document.getElementById("lowerCase");
  const uppercaseInput = document.getElementById("upperCase");
  const specalcharInput = document.getElementById("specialChar");

  // Main function - generate a password
  function generatePassword() {
    // random password output regardless of user input
    randomPassword = "";
    // a new array will be created with the below selections
  finalPassword =[];

    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
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
       var  upperCase = confirm("Will this contain Uppercase letters?");
       var lowerCase = confirm("Will this contain Lowercase letters?");
    };

  //password length input here, password length variable assigned above
      //for (let i = 0; i < Number(passwordLength); i++){

   // }

    return finalPassword;
  }

  // Add event listener to generate button 
  generateBtn.addEventListener("click", writePassword);  



    