// Connect to jquery

(function() {
  var startingTime = new Date().getTime();
  // Load the script
  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName("head")[0].appendChild(script);

  // Poll for jQuery to come into existence
  var checkReady = function(callback) {
      if (window.jQuery) {
          callback(jQuery);
      }
      else {
          window.setTimeout(function() { checkReady(callback); }, 20);
      }
  };

  // Start polling...
  checkReady(function($) {
      $(function() {
          var endingTime = new Date().getTime();
          var tookTime = endingTime - startingTime;
      });
  });
})();


// Main scripts


var password = {
  length: Number,
  chars: String
}

var myPassword = "";

var passwordText = document.querySelector("#password");

var possibleChars = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  specialCharacter: "!@#$%^&*()"
}

function setPasswordChars() {
  var passwordChars = $('#password-chars').val();
  var selectedChars = "";
  if (passwordChars.includes("lowercase", 0)){
    selectedChars += possibleChars.lowercase;
  }
  if (passwordChars.includes("uppercase", 0)){
    selectedChars += possibleChars.uppercase;
  }
  if (passwordChars.includes("number", 0)){
    selectedChars += possibleChars.number;
  }
  if (passwordChars.includes("special-character", 0)){
    selectedChars += possibleChars.specialCharacter;
  }
  password.chars = selectedChars
  return password.chars;
}

function setPasswordLength(){
  var passwordLength = document.getElementById("password-length").value;
  document.getElementById("password-length").innerHTML = passwordLength;
  password.length = passwordLength;
  if (password.length < 8){
    window.alert("A strong password contains at least 8 characters. Proceed at your own risk☠!");
  }
  return password.length;
}


function generatePassword() {
  for (var i = 0; i <= password.length; i++) {
    var randomChar = Math.floor(Math.random() * password.chars.length);
    myPassword += password.chars.substring(randomChar, randomChar +1);
  }
  return myPassword;
}

function clearPassword() {
  myPassword = "";
  passwordText.value = "";
}

// Write password to the #password input
function writePassword() {
  setPasswordLength()
  setPasswordChars()
  var myPassword = generatePassword();
  passwordText.value = myPassword;
}
