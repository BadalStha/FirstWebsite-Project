// search section visibility
document.getElementById("search-icon").addEventListener("click", function (e) {
  e.preventDefault();
  const searchContainer = document.getElementById("search-container");
  searchContainer.classList.toggle("active");
  if (searchContainer.classList.contains("active")) {
    document.getElementById("search-input").focus();
  }
});

// quit search section when click outside
document.addEventListener("click", function (e) {
  const searchContainer = document.getElementById("search-container");
  const searchIcon = document.getElementById("search-icon");
  if (!searchContainer.contains(e.target) && !searchIcon.contains(e.target)) {
    searchContainer.classList.remove("active");
  }
});

// generate functionality for searching item
function toggleSearch() {
  var searchBox = document.getElementById("search-container");
  if (searchBox.style.display === "none" || searchBox.style.display === "") {
    searchBox.style.display = "block";
  } else {
    searchBox.style.display = "none";
  }
}

function searchProducts() {
  // show the search item 
  var searchText = document.getElementById("search-input").value.toLowerCase();

  //It will provide all products container
  var products = document.getElementsByClassName("product-container");

  // Loop through each product
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var title = product
      .querySelector(".product-title")
      .textContent.toLowerCase();

    // If product title contains search text, show it otherwise hide it//
    if (title.includes(searchText)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
}
