
//Simple function to verify login details//

function verifyLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email === "") {
    alert("Please insert your email"); // if email doesnot enter then it will show a popup icon "Please insert your email."//
    return false;
  }
  if (password === "") {
    alert("Please insert a password."); // if password doesnot enter then it will show a popup icon "Please enter your password."//
    return false;
  }
  if (password.length < 8) {
    alert("Password must be 8 characters"); // if password length is <8 character it will show a popup icon "password must contain at least 8 characters"//
    return false;
  }
  var pattern = /[A-Z]/;
  if (!pattern.test(password)) {
    alert("Password must have one capital letter");
    return false;
  }
  var pattern = /[a-z]/;
  if (!pattern.test(password)) {
    alert("Password must have one small letter");
    return false;
  }
  var pattern = /[0-9]/;
  if (!pattern.test(password)) {
    alert("Passowrd must have one number");
    return false;
  }
  var pattern = /[!@#$%^&*(),.?":{}|<>]/;
  if (!pattern.test(password)) {
    alert("Password must contain at least one special character.");
    return false;
  }
  alert("Login Successful.");
  return true;
}
