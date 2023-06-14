export default function generatePassword () {
  let passLength = JSON.parse(localStorage.getItem("pass-length"));
  let passParams = JSON.parse(localStorage.getItem("pass-params"));

  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (passLength === 0) {
    alert("Please enter a password length!");
    return;
  }

  if (passLength < 8) {
    alert(
      "A strong password is at least 8 characters long! Proceed at your own risk!"
    );
  }

  if (
    passParams.lowercase ||
    passParams.uppercase ||
    passParams.numbers ||
    passParams.symbols
  ) {
    let pass = "";
    let charset = "";

    if (passParams.lowercase) {
      charset += lowerChars;
      pass += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
    }
    if (passParams.uppercase) {
      charset += upperChars;
      pass += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
    }
    if (passParams.numbers) {
      charset += numberChars;
      pass += numberChars.charAt(
        Math.floor(Math.random() * numberChars.length)
      );
    }
    if (passParams.symbols) {
      charset += symbolChars;
      pass += symbolChars.charAt(
        Math.floor(Math.random() * symbolChars.length)
      );
    }

    let charsToSkip = pass.length;
    let i = 0;

    while (i < passLength - charsToSkip) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
      i++;
    }

    let passArray = pass.split("");
    return passArray.sort(() => Math.random() - 0.5).join("");
  } else {
    alert("Please select at least one character type to include!");
  }
};