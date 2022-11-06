// Assignment code here
var password = {
  chars: "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  length: 12
}

var myPassword = "";

function generatePassword() {
  for (var i = 0; i <= password.length; i++) {
    var randomChar = Math.floor(Math.random() * password.chars.length);
    myPassword += password.chars.substring(randomChar, randomChar +1)
  }
  return myPassword;
}

var passwordText = document.querySelector("#password");

function clearPassword() {
  myPassword = "";
  passwordText.value = "";
}

// Write password to the #password input
function writePassword() {
  var myPassword = generatePassword();
  passwordText.value = myPassword;
}
