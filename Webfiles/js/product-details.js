// Generate simple functionality to select size//

function selectSize(button) {
  const allButtons = document.querySelectorAll(".size-selector");

  allButtons.forEach((btn) => btn.classList.remove("selected"));

  button.classList.add("selected");
}

//generate a popup of +1 in navbar cart icon when we click the add to cart button//

function addToCart() {
  const counter = document.getElementById("cart-counter");
  let currentCount = parseInt(counter.textContent);
  counter.textContent = currentCount + 1;

  // Generate a popup for Add to cart button//

  alert("Item added to cart successfully!");
}

// Generate a popup for buy now button//

function BuyNow() {
  alert("Please add the item to cart first");
}
