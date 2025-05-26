//Simple function to select id//

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

//Simple function to insert details to submit feedback//

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "") {
    alert("Please insert your name");// if name doesnot enter then it will show a popup icon "Please insert your name"//
    return false;
  }

  if (name.length < 5) {
    alert("Name must contain at least 5 characters"); // if name length is <5 character it will show a popup icon "Name must contain at least 5 characters"//
    return false;
  }

  if (email === "") {
    alert("Please insert your email"); // if email doesnot enter then it will show a popup icon "Please enter your email"//
    return false;
  }

  if (message === "") {
    alert("Please insert your message"); // if messege doesn't enter then it will show a popup icon "Please insert your messege"//
    return false;
  }

  alert("Message submitted successfully!"); //if messege has enter then it will show a popup icon "Message submitted successfully!"//
  return true;
}
