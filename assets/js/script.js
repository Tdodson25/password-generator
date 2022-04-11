// Assignment code here

// Character Array
const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "}", "[", "]", ":", "|", ";", "<", ",", ">", "?", "/", "."];

function getPasswordOptions() {

var length = parseInt(
  prompt('How many characters would you like your password to contain?')
);
// Check user input for length of password
if (typeof(length) !== 'number') {
  alert('Password length must be between 8 and 128 characters');
  return null;
}

if (length < 8) {
  alert('Password must be at least 8 characters');
  return null;
}

if (length > 128) {
  alert('Password must be less than 128 characters')
}


// User input for character selection types
var hasUpperCaseChar = confirm('Click Ok to include uppercase letters in your password')

var hasLowerCaseChar = confirm('Click Ok to include lowercase letters in your password')

var hasNumberChar = confirm('Click Ok to inclue numbers in your password')

var hasSpecicalChar = confirm('Click Ok to include special characters in your password')

// Make sure users picks at least one option
if (
  hasUpperCaseChar === false &&
  hasLowerCaseChar === false &&
  hasNumberChar === false &&
  hasSpecicalChar === false
) {
  alert('You must pick at least one option, Please try again.');
  return null;
}
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);