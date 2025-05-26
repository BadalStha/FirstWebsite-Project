//Simple function to open product page//

function openProductPage() {
  window.location.href = "/html/product.html";
}

//Simple function to open product-details page//

function openProduct() {
  window.location.href = "/html/product-detail.html";
}


//Simple function to verify email to login//

function verifyEmail() {
  var email = document.getElementById("email").value;

  if (email === "") {
    alert("Please insert your email"); // if email doesnot enter then it will show a popup icon "Please enter your email"//
    return false;
  }

  alert("Your Email Has been registered!"); // if email has been enter then it will show a popup icon "your Email has been registered'//
  return true;
}

// Simple funtion to side image in home page//

var images = [
  "/img/slider2.png",
  "/img/slider3.png",
  "/img/slider4.png",
  "/img/slider5.png",
  "/img/slider1.png",
];

var x = 0;
var imgs = document.getElementById("img");
setInterval(slider, 3000);

function slider() {
  if (x < images.length) {
    x = x + 1;
  } else {
    x = 1;
  }

  imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}
