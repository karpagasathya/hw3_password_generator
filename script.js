var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialCharacter = "~!@#$%^&*()_+=";



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    
  var passwordLength= getPasswordLength();
  let isUpperCase = confirm("Do you want Uppercase letters");
  let isLowerCase = confirm("Do you want Lowercase letters");
  let isNumber = confirm("Do you want Numbers");
  let isSpecialCharacter = confirm("Do you want Special Charaters");

  let characterSet = "";
  if (isUpperCase || isLowerCase || isNumber || isSpecialCharacter) {
    if (isUpperCase) characterSet += upperCase;
    if (isLowerCase) characterSet += lowerCase;
    if (isNumber) characterSet += number;
    if (isSpecialCharacter) characterSet += specialCharacter;
  } else {
    alert("You have to choose atleast one charater type");
  }
  let finalPassword = "";
    for (var i = 0; i < passwordLength; i++) {
        finalPassword += characterSet.charAt(Math.floor(Math.random() * characterSet.length))
    }
    return finalPassword;
}


function getPasswordLength() {
   let passwordLength = prompt("length of the password");
   console.log(passwordLength);
   if (!passwordLength) {
     alert("provide password length");
     passwordLength = prompt("length of the password");
   }
   if (passwordLength < 8 || passwordLength > 128) {
     alert("provide password length between 8 and 128");
     passwordLength = prompt("length of the password");
    } 
    return passwordLength;
}

