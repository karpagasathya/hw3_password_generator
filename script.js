var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialCharacter = "~!@#$%^&*()_-+=|}]{[':;?/>.<,";

// Assignment Code
var generateBtn = document.querySelector("#generate");
var copy = document.querySelector("#copy");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  passwordText.value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Add event listener to copy button
copy.addEventListener("click", copyPassword);

function generatePassword() {
  let finalPassword = "";
  let passwordLength = parseInt(prompt("How many characters would you like for your password? Choose between 8 and 128"));
// checking given password length is a number and between 8 & 128
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must choose a number between 8 and 128.");
  } else {
    let isUpperCase = confirm("Do you want to include uppercase letters?");
    let isLowerCase = confirm("Do you want to include lowercase letters?");
    let isNumber = confirm("Do you want to include numbers?");
    let isSpecialCharacter = confirm("Do you want to include special characters?");

    let characterSet = "";
    if (isUpperCase || isLowerCase || isNumber || isSpecialCharacter) {
      if (isUpperCase) characterSet += upperCase;
      if (isLowerCase) characterSet += lowerCase;
      if (isNumber) characterSet += number;
      if (isSpecialCharacter) characterSet += specialCharacter;
    } else {
      alert("You have to choose atleast one character type");
    }

    var randomNumberArray = [];

    while (randomNumberArray.length < 4) {
      let tempRandomNumber = Math.floor(Math.random() * passwordLength);

      if (randomNumberArray.indexOf(tempRandomNumber) < 0) {
        randomNumberArray.push(tempRandomNumber);
      }
    }
    let uppercaseRandomLoc = randomNumberArray[0];
    let lowercaseRandomLoc = randomNumberArray[1];
    let numberRandomLoc = randomNumberArray[2];
    let symbolRandomLoc = randomNumberArray[3];

    for (let i = 0; i < passwordLength; i++) {
      let passwordChar = characterSet.charAt(Math.floor(Math.random() * characterSet.length));

      // performing this check to make sure all criteria user inputs are present in the password,
    
      if (i === uppercaseRandomLoc && isUpperCase) {
        while (!upperCase.includes(passwordChar)) {
          passwordChar = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        }
      }

      if (i === lowercaseRandomLoc && isLowerCase) {
        while (!lowerCase.includes(passwordChar)) {
          passwordChar = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        }
      }

      if (i === numberRandomLoc && isNumber) {
        while (!number.includes(passwordChar)) {
          passwordChar = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        }
      }

      if (i === symbolRandomLoc && isSpecialCharacter) {
        while (!specialCharacter.includes(passwordChar)) {
          passwordChar = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        }
      }

      finalPassword += passwordChar;
    }
  }

  return finalPassword;
}


// copy to clipboard function
function copyPassword() {
  if (passwordText.value !== "") {
    passwordText.select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
  }
}
