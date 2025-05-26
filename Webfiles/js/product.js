//generate a popup of +1 in navbar cart icon when we click the add to cart button//

function addToCart() {
  const counter = document.getElementById("cart-counter");
  let currentCount = parseInt(counter.textContent);
  counter.textContent = currentCount + 1;

  // Generate a popup for add to cart button//

  alert("Item added to cart successfully!");
}
