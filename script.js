var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "01234567890";
var specialCharacter = "~!@#$%^&*()_+=";

// Assignment Code
var generateBtn = document.querySelector("#generate");
var copy = document.querySelector("#copy");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  if (!password) {
    password = "";
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Add event listener to copy button
copy.addEventListener("click", copyPassword);

function generatePassword() {

  let passwordLength = parseInt(
    prompt(
      "how many characters would you like for your password? choose between 8 and 128"
    )
  );
  console.log(passwordLength);
  if (!passwordLength) {
    alert("Password length should be Numeric");
    
  } else {
    if (passwordLength < 8 || passwordLength > 128) {
      alert("You must choose between 8 and 128");
    } else {
      let isUpperCase = confirm("Do you want Uppercase letters");
      let isLowerCase = confirm("Do you want Lowercase letters");
      let isNumber = confirm("Do you want Numbers");
      let isSpecialCharacter = confirm("Do you want Special Characters");

      let characterSet = "";
      if (isUpperCase || isLowerCase || isNumber || isSpecialCharacter) {
        if (isUpperCase) characterSet += upperCase;
        if (isLowerCase) characterSet += lowerCase;
        if (isNumber) characterSet += number;
        if (isSpecialCharacter) characterSet += specialCharacter;
      } else {
        alert("You have to choose atleast one character type");
      }

      let finalPassword = "";
      for (var i = 0; i < passwordLength; i++) {
        finalPassword += characterSet.charAt(
          Math.floor(Math.random() * characterSet.length)
        );
      }

      return finalPassword;
    }
  }

}

// copy to clipboard function
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}
