window.addEventListener("load", function (e) {
  //start your code here
 
  var passwordLength
  
  document.getElementById("passwordSubmit").addEventListener("click", function (e) {
    event.preventDefault();
    passwordLength = document.getElementById("passwordLength").value;
    
    // calculatePassword(passwordLength);
    document.getElementById("passwordResult").innerHTML = calculatePassword(passwordLength);
  });

  //This calculates a random password
  function calculatePassword(length) {
    var password = getUppercaseLetter() + getLowercaseLetter() + getSpecialChar() + getNumber();
    for (var)
    console.log(password);
    return password;
  }

  function getUppercaseLetter() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }

  function getLowercaseLetter() {
    return  getUppercaseLetter().toLowerCase();
  }

  function getSpecialChar() {
    return String.fromCharCode(33 + Math.floor(Math.random() * 15));
  }

  function getNumber() {
    return Math.floor(Math.random() * 10);
  }
  
}); 