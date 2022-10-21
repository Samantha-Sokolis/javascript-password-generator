  // First prompt- alert- on opening browser
  alert("Confirm password requirements by clicking the GENERATE PASSWORD button below");

    //Array specifcations for each of the character requirements - password length default is set
    var passwordLength = 8;
    var choiceArr = [];
  
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var specialChar = ["`","~","!","@","#","$","%","&","*","+","=","?"];

 // Assignment Code
 var generateBtn = document.querySelector("#generate");

  // Add event listener to generate button 
  generateBtn.addEventListener("click", writePassword);  

  // Write password to the #password input
  function writePassword() {
      var correctPrompts = getPrompts(); //returns true or false 
      var passwordText = document.querySelector("#password");

  // If statement to generate password if user clicks okay on all prompts
      if(correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
      }
  }
   
  // Main function - to Return password based on length and random selection of character
  function generatePassword() {
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomLetter = Math.floor(Math.random() * choiceArr.length)
      password = password + choiceArr[randomLetter];
    }
    return password;
  }
  
   // getPrompts contains all user input prompts needed to generate password
  function getPrompts() {
  //choiceArr to reset array after every password generate
        choiceArr = [];

        passwordLength = parseInt(prompt("Enter your password length. Must be between 8 and 128 characters"));

        if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
          alert("Character length has to be between 8 - 128. Please try again.");
          return false;
        }

        if (confirm("Will this contain Lowercase letters?")) {
          choiceArr = choiceArr.concat(lowerCase);
        }

        if (confirm("Will this contain Uppercase letters?")) {
          choiceArr = choiceArr.concat(upperCase);
        }

        if (confirm("Will this contain special characters?")) {
          choiceArr = choiceArr.concat(specialChar);
        }

        if (confirm("Will this contain Lowercase letters?")) {
          choiceArr = choiceArr.concat(lowerCase);
        }

        if (confirm("Will this contain numbers?")) {
          choiceArr = choiceArr.concat(numbers);
        }
        return true;
      };
      
  

