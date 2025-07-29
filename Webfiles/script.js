
/* ==============================================================================
   FORM VALIDATION FUNCTIONS
   ============================================================================== */

//Enhanced form validation with better UX and security
function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Enhanced name validation
  if (name === "") {
    showToast("👤 Please enter your name", "error");
    document.getElementById("name").focus();
    return false;
  }

  if (name.length < 2) {
    showToast("👤 Name must be at least 2 characters long", "error");
    document.getElementById("name").focus();
    return false;
  }

  if (name.length > 50) {
    showToast("👤 Name must be less than 50 characters", "error");
    document.getElementById("name").focus();
    return false;
  }

  // Check for numbers or special characters in name
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    showToast("👤 Name should only contain letters and spaces", "error");
    document.getElementById("name").focus();
    return false;
  }

  // Enhanced email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    showToast("📧 Please enter your email address", "error");
    document.getElementById("email").focus();
    return false;
  }

  if (!emailRegex.test(email)) {
    showToast("📧 Please enter a valid email address", "error");
    document.getElementById("email").focus();
    return false;
  }

  // Enhanced message validation
  if (message === "") {
    showToast("💬 Please enter your message", "error");
    document.getElementById("message").focus();
    return false;
  }

  if (message.length < 10) {
    showToast("💬 Message must be at least 10 characters long", "error");
    document.getElementById("message").focus();
    return false;
  }

  if (message.length > 500) {
    showToast("💬 Message must be less than 500 characters", "error");
    document.getElementById("message").focus();
    return false;
  }

  // Store feedback in localStorage
  const feedback = {
    name: name,
    email: email,
    message: message,
    timestamp: new Date().toISOString()
  };

  let feedbackList = JSON.parse(localStorage.getItem('customerFeedback')) || [];
  feedbackList.push(feedback);
  localStorage.setItem('customerFeedback', JSON.stringify(feedbackList));

  showToast(`🎉 Thank you ${name}! Your feedback has been submitted successfully.
📧 We'll respond to ${email} within 24 hours.
💝 We appreciate your valuable input!`, "success");

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return true;
}

/* ==============================================================================
   HOME PAGE FUNCTIONS
   ============================================================================== */

/* ==============================================================================
   PAGE TRANSITION AND NAVIGATION ENHANCEMENTS
   ============================================================================== */

// Enhanced page navigation with loading effects
function navigateWithTransition(url) {
  // Show loading overlay
  const loadingOverlay = document.createElement('div');
  loadingOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #3498db, #2980b9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    color: white;
    font-size: 18px;
    font-weight: 600;
  `;
  
  loadingOverlay.innerHTML = `
    <div style="text-align: center;">
      <div style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 20px;"></div>
      <p>Loading SwiftStep...</p>
    </div>
  `;
  
  document.body.appendChild(loadingOverlay);
  
  // Navigate after brief delay
  setTimeout(() => {
    window.location.href = url;
  }, 800);
}

//Enhanced function to open product page with loading effect
function openProductPage() {
  navigateWithTransition("product.html");
}

//Enhanced function to open product-details page with loading effect
function openProduct() {
  navigateWithTransition("product-detail.html");
}

// Add page load fade-in effect
document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

//Enhanced email verification with better validation and UX
function verifyEmail() {
  var email = document.getElementById("email").value.trim();

  // Enhanced email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email === "") {
    showToast("📧 Please enter your email address", "error");
    return false;
  }
  
  if (!emailRegex.test(email)) {
    showToast("❌ Please enter a valid email address", "error");
    return false;
  }
  
  // Check for common email providers for better UX
  const commonProviders = ['gmail', 'yahoo', 'hotmail', 'outlook'];
  const domain = email.split('@')[1];
  const isCommonProvider = commonProviders.some(provider => domain.includes(provider));
  
  // Store email in localStorage for future reference
  let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
  
  if (subscribers.includes(email)) {
    showToast("✅ You're already subscribed to our newsletter!", "info");
    return false;
  }
  
  subscribers.push(email);
  localStorage.setItem('subscribers', JSON.stringify(subscribers));
  
  // Show success message with personalized content
  const welcomeMessage = isCommonProvider 
    ? `🎉 Welcome to SwiftStep! Your subscription is confirmed.
📧 Confirmation sent to ${email}
🎁 Watch for exclusive offers and early access to new arrivals!`
    : `🎉 Thank you for subscribing!
📧 Please check ${email} for confirmation
🎁 Get ready for amazing deals and updates!`;
  
  showToast(welcomeMessage, "success");
  
  // Clear the email input
  document.getElementById("email").value = "";
  
  // Add a celebration effect
  createCelebrationEffect();
  
  return true;
}

// Create celebration effect for successful subscription
function createCelebrationEffect() {
  const celebrationDiv = document.createElement('div');
  celebrationDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    z-index: 10001;
    pointer-events: none;
    animation: celebrate 2s ease-out forwards;
  `;
  celebrationDiv.textContent = '🎉';
  
  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes celebrate {
      0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 1; }
      50% { transform: translate(-50%, -50%) scale(1.5) rotate(180deg); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(0) rotate(360deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(celebrationDiv);
  
  setTimeout(() => {
    celebrationDiv.remove();
    style.remove();
  }, 2000);
}

// Enhanced image slider for home page with proper paths
var images = [
  "img/slider2.png",
  "img/slider3.png", 
  "img/slider4.png",
  "img/slider5.png",
  "img/slider1.png",
];

var x = 0;
var imgs = document.getElementById("img");

// Initialize slider when DOM is loaded
if (imgs) {
  setInterval(slider, 3000);
}

function slider() {
  if (!imgs) return; // Safety check
  
  if (x < images.length) {
    x = x + 1;
  } else {
    x = 1;
  }

  imgs.innerHTML = "<img src=" + images[x - 1] + " alt='SwiftStep Slider Image'>";
}

/* ==============================================================================
   LOGIN PAGE FUNCTIONS
   ============================================================================== */

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

/* ==============================================================================
   PRODUCT PAGE FUNCTIONS
   ============================================================================== */

// Function to open product details page with specific product data
function openProductDetail(productId, productName, productPrice, productImage, productDescription, originalPrice) {
  const productData = {
    id: productId,
    name: productName,
    price: productPrice,
    image: productImage,
    description: productDescription,
    originalPrice: originalPrice || (productPrice * 1.6).toFixed(0)
  };
  
  // Store product data in sessionStorage for the detail page
  sessionStorage.setItem('selectedProduct', JSON.stringify(productData));
  
  // Open product detail page
  window.open('product-detail.html', '_blank');
}

//Enhanced add to cart with visual feedback and animations
function addToCart(productId, productName, price) {
  const counter = document.getElementById("cart-counter");
  let currentCount = parseInt(counter.textContent);
  counter.textContent = currentCount + 1;

  // Store cart items in localStorage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const existingItem = cartItems.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      id: productId,
      name: productName,
      price: price,
      quantity: 1
    });
  }
  
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  // Enhanced visual feedback
  showToast(`${productName} added to cart successfully!`, 'success');
  
  // Animate cart counter
  counter.style.transform = 'scale(1.3)';
  counter.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
  setTimeout(() => {
    counter.style.transform = 'scale(1)';
    counter.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
  }, 300);
}

// Enhanced Buy Now functionality with better UX
function buyNow(productId, productName, price) {
  // Show loading state
  showToast('🔄 Processing your order...', 'info');
  
  // Simulate processing delay for better UX
  setTimeout(() => {
    // First add to cart
    addToCart(productId, productName, price);
    
    // Then proceed to checkout simulation
    const total = price;
    const confirmed = confirm(`🛍️ Proceed to buy ${productName} for Rs.${price.toLocaleString()}?\n\n💰 Total: Rs.${total.toLocaleString()}\n\n✅ Click OK to continue to checkout`);
    
    if (confirmed) {
      showToast(`🎉 Thank you for your purchase!\n📦 Product: ${productName}\n💳 Total: Rs.${total.toLocaleString()}\n\n📧 Order confirmation will be sent to your email.`, 'success');
      
      // Animate success
      document.body.style.background = 'linear-gradient(135deg, #d5f4e6, #f8fff8)';
      setTimeout(() => {
        document.body.style.background = 'linear-gradient(135deg, #f8f5f1 0%, #faf9f7 100%)';
      }, 2000);
    }
  }, 800);
}

/* ==============================================================================
   TOAST NOTIFICATION SYSTEM
   ============================================================================== */

function showToast(message, type = 'info') {
  // Remove existing toasts
  const existingToasts = document.querySelectorAll('.toast');
  existingToasts.forEach(toast => toast.remove());
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  // Style the toast
  Object.assign(toast.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '15px 25px',
    borderRadius: '10px',
    color: 'white',
    fontWeight: '600',
    zIndex: '10000',
    transform: 'translateX(100%)',
    transition: 'all 0.3s ease',
    maxWidth: '400px',
    wordWrap: 'break-word',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  });
  
  // Set background based on type
  const backgrounds = {
    success: 'linear-gradient(135deg, #27ae60, #2ecc71)',
    error: 'linear-gradient(135deg, #e74c3c, #c0392b)',
    info: 'linear-gradient(135deg, #3498db, #2980b9)',
    warning: 'linear-gradient(135deg, #f39c12, #e67e22)'
  };
  
  toast.style.background = backgrounds[type] || backgrounds.info;
  
  // Add to page
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 300);
  }, 4000);
}

/* ==============================================================================
   PRODUCT DETAILS PAGE FUNCTIONS
   ============================================================================== */

// Load product details dynamically on product detail page
function loadProductDetails() {
  const productData = JSON.parse(sessionStorage.getItem('selectedProduct'));
  
  if (productData) {
    // Update product image
    const productImage = document.querySelector('.real-image');
    if (productImage) {
      productImage.src = productData.image;
      productImage.alt = productData.name;
    }
    
    // Update product title
    const productTitle = document.querySelector('.details h1');
    if (productTitle) {
      productTitle.textContent = productData.name;
    }
    
    // Update product price
    const priceContainer = document.querySelector('.price');
    if (priceContainer) {
      const currentPrice = priceContainer.querySelector('h2');
      const originalPrice = priceContainer.querySelector('p');
      if (currentPrice) currentPrice.textContent = `Rs. ${productData.price}`;
      if (originalPrice) originalPrice.textContent = `Rs. ${productData.originalPrice}`;
    }
    
    // Update product description in details section
    const detailsSection = document.querySelector('.Product_details .product-details');
    if (detailsSection) {
      let descriptionParagraph = detailsSection.querySelector('.product-description');
      if (!descriptionParagraph) {
        descriptionParagraph = document.createElement('p');
        descriptionParagraph.className = 'product-description';
        detailsSection.appendChild(descriptionParagraph);
      }
      descriptionParagraph.textContent = productData.description;
    }
    
    // Update Add to Cart button functionality
    const addToCartBtn = document.querySelector('.cart-button');
    if (addToCartBtn) {
      addToCartBtn.onclick = function() {
        addToCart(productData.id, productData.name, productData.price);
      };
    }
    
    // Update Buy Now button functionality
    const buyNowBtn = document.querySelector('.buy-now');
    if (buyNowBtn) {
      buyNowBtn.onclick = function() {
        buyNow(productData.id, productData.name, productData.price);
      };
    }
  }
}

// Generate simple functionality to select size//
function selectSize(button) {
  const allButtons = document.querySelectorAll(".size-selector");

  allButtons.forEach((btn) => btn.classList.remove("selected"));

  button.classList.add("selected");
}

// Generate a popup for buynow button//
function BuyNow() {
  alert("Please add the item to cart first");
}

/* ==============================================================================
   ENHANCED SEARCH FUNCTIONALITY
   ============================================================================== */

// Enhanced search section visibility with better UX
document.addEventListener('DOMContentLoaded', function() {
  const searchIcon = document.getElementById("search-icon");
  if (searchIcon) {
    searchIcon.addEventListener("click", function (e) {
      e.preventDefault();
      const searchContainer = document.getElementById("search-container");
      if (searchContainer) {
        searchContainer.classList.toggle("active");
        if (searchContainer.classList.contains("active")) {
          const searchInput = document.getElementById("search-input");
          if (searchInput) {
            searchInput.focus();
          }
        }
      }
    });
  }

  // Close search section when clicking outside
  document.addEventListener("click", function (e) {
    const searchContainer = document.getElementById("search-container");
    const searchIcon = document.getElementById("search-icon");
    if (searchContainer && searchIcon && 
        !searchContainer.contains(e.target) && 
        !searchIcon.contains(e.target)) {
      searchContainer.classList.remove("active");
    }
  });
});

// Enhanced search functionality with debouncing and better results
let searchTimeout;
function searchProducts() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const searchText = document.getElementById("search-input").value.toLowerCase().trim();
    
    // Get all product containers from different pages
    const products = document.getElementsByClassName("product-container");
    let foundResults = 0;
    
    // If on product page, search through individual products
    if (window.location.pathname.includes('product.html')) {
      const productCards = document.querySelectorAll('.product-page .product-container');
      
      productCards.forEach(product => {
        const titleElement = product.querySelector(".product-title");
        const descriptionElement = product.querySelector(".product-description");
        
        if (titleElement || descriptionElement) {
          const title = titleElement ? titleElement.textContent.toLowerCase() : '';
          const description = descriptionElement ? descriptionElement.textContent.toLowerCase() : '';
          
          // Check if search text matches title or description
          if (title.includes(searchText) || description.includes(searchText) || searchText === '') {
            product.style.display = "block";
            foundResults++;
          } else {
            product.style.display = "none";
          }
        }
      });
    } 
    // If on home page, search through featured products
    else if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
      const productCards = document.querySelectorAll('.product-card');
      
      productCards.forEach(product => {
        const titleElement = product.querySelector("h3");
        
        if (titleElement) {
          const title = titleElement.textContent.toLowerCase();
          
          if (title.includes(searchText) || searchText === '') {
            product.style.display = "block";
            foundResults++;
          } else {
            product.style.display = "none";
          }
        }
      });
    }
    
    // Show search results feedback
    showSearchFeedback(searchText, foundResults);
  }, 300); // Debounce for 300ms
}

// Show search results feedback
function showSearchFeedback(searchText, foundResults) {
  // Remove existing feedback
  const existingFeedback = document.querySelector('.search-feedback');
  if (existingFeedback) {
    existingFeedback.remove();
  }
  
  if (searchText && searchText.length > 0) {
    const feedback = document.createElement('div');
    feedback.className = 'search-feedback';
    feedback.style.cssText = `
      position: fixed;
      top: 150px;
      right: 20px;
      background: white;
      padding: 10px 15px;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      z-index: 1000;
      font-size: 14px;
      color: #2c3e50;
      border-left: 4px solid #3498db;
    `;
    
    feedback.textContent = `Found ${foundResults} result${foundResults !== 1 ? 's' : ''} for "${searchText}"`;
    document.body.appendChild(feedback);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      if (feedback.parentNode) {
        feedback.remove();
      }
    }, 3000);
  }
}

// Legacy function for backward compatibility
function toggleSearch() {
  const searchContainer = document.getElementById("search-container");
  if (searchContainer) {
    searchContainer.classList.toggle("active");
    if (searchContainer.classList.contains("active")) {
      const searchInput = document.getElementById("search-input");
      if (searchInput) {
        searchInput.focus();
      }
    }
  }
}

/* ==============================================================================
   CART INITIALIZATION
   ============================================================================== */

// Initialize cart counter on page load
function initializeCart() {
  const counter = document.getElementById("cart-counter");
  if (counter) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    counter.textContent = totalItems;
  }
}

/* ==============================================================================
   DOM CONTENT LOADED - ENHANCED INITIALIZATION
   ============================================================================== */

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
  initializeCart();
  fixProductLayout();
  initializeAnimations();
  
  // Load product details if on product detail page
  if (window.location.pathname.includes('product-detail.html')) {
    loadProductDetails();
  }
  
  // Add click handlers to all product containers
  addProductClickHandlers();
  
  // Initialize smooth scrolling for navigation links
  initializeSmoothScrolling();
  
  // Add loading states for better UX
  addLoadingStates();
});

/* ==============================================================================
   ENHANCED ANIMATIONS AND INTERACTIONS
   ============================================================================== */

// Initialize page animations
function initializeAnimations() {
  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all product cards and sections
  document.querySelectorAll('.product-card, .brand-card, .newsletter-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

// Initialize smooth scrolling for navigation
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add loading states for buttons
function addLoadingStates() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (!this.classList.contains('loading')) {
        this.classList.add('loading');
        setTimeout(() => {
          this.classList.remove('loading');
        }, 1000);
      }
    });
  });
}

// Function to add click handlers to all product containers
function addProductClickHandlers() {
  const productContainers = document.querySelectorAll('.product-page .product-container');
  
  productContainers.forEach((container, index) => {
    // Skip if already has onclick
    if (container.onclick) return;
    
    const image = container.querySelector('.image img');
    const title = container.querySelector('.product-title');
    const description = container.querySelector('.product-description');
    const priceSpan = container.querySelector('.product-price span');
    const originalPriceSpan = container.querySelector('.product-price span[style*="line-through"]');
    
    if (image && title && description && priceSpan) {
      const productId = index + 1;
      const productName = title.textContent.trim();
      const productPrice = parseInt(priceSpan.textContent.replace('Rs.', '').replace(',', ''));
      const productImage = image.src.includes('http') ? image.src : image.getAttribute('src');
      const productDescription = description.textContent.trim();
      const originalPrice = originalPriceSpan ? 
        parseInt(originalPriceSpan.textContent.replace('Rs.', '').replace(',', '')) : 
        Math.round(productPrice * 1.6);
      
      // Add click handler and cursor pointer
      container.style.cursor = 'pointer';
      container.addEventListener('click', function(e) {
        // Don't trigger if clicking on buttons
        if (e.target.tagName === 'BUTTON') return;
        
        openProductDetail(productId, productName, productPrice, productImage, productDescription, originalPrice);
      });
    }
  });
}

// Function to fix product layout issues
function fixProductLayout() {
  // Ensure all product containers have proper structure
  const productContainers = document.querySelectorAll('.product-page .product-container');
  
  productContainers.forEach(container => {
    const details = container.querySelector('.product-details');
    if (details) {
      // Ensure the container has proper flex properties
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.minHeight = '550px';
      container.style.height = 'auto';
      
      // Ensure details section is flexible with reduced padding
      details.style.flex = '1';
      details.style.display = 'flex';
      details.style.flexDirection = 'column';
      details.style.justifyContent = 'space-between';
      details.style.padding = '15px 20px 20px';
      
      // Ensure button container is at the bottom
      const btnContainer = details.querySelector('.btn-container');
      if (btnContainer) {
        btnContainer.style.marginTop = 'auto';
        btnContainer.style.flexShrink = '0';
      }
      
      // Reduce spacing for all child elements
      const title = details.querySelector('.product-title');
      if (title) {
        title.style.marginBottom = '6px';
        title.style.minHeight = '40px';
      }
      
      const description = details.querySelector('.product-description');
      if (description) {
        description.style.marginBottom = '8px';
      }
      
      const price = details.querySelector('.product-price');
      if (price) {
        price.style.marginBottom = '6px';
      }
      
      // Style rating sections
      const ratingSection = details.querySelector('.rating-section');
      if (ratingSection) {
        ratingSection.style.marginBottom = '8px';
      }
      
      // Style non-classed rating divs
      const ratingDivs = details.querySelectorAll('div:not(.product-price):not(.btn-container):not(.rating-section)');
      ratingDivs.forEach(div => {
        if (div.querySelector('img') && div.querySelector('span')) {
          div.style.marginBottom = '8px';
          div.style.display = 'flex';
          div.style.alignItems = 'center';
          div.style.gap = '10px';
        }
      });
    }
  });
}

/* ==============================================================================
   ENHANCED CART MANAGEMENT FUNCTIONS
   ============================================================================== */

// Enhanced function to view cart contents with better UI
function viewCart() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  if (cartItems.length === 0) {
    showToast('Your cart is empty! Browse our products and add some items.', 'info');
    return;
  }
  
  // Create a more sophisticated cart display
  let cartHTML = `
    <div style="max-width: 500px; background: white; border-radius: 15px; padding: 25px; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
      <h3 style="margin-bottom: 20px; color: #2c3e50; font-size: 24px; text-align: center;"><i class='bx bx-cart' style="margin-right: 10px;"></i>Your Shopping Cart</h3>
      <div style="max-height: 400px; overflow-y: auto;">
  `;
  
  let total = 0;
  
  cartItems.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    
    cartHTML += `
      <div style="border-bottom: 1px solid #eee; padding: 15px 0; display: flex; justify-content: space-between; align-items: center;">
        <div style="flex: 1;">
          <h4 style="color: #2c3e50; margin-bottom: 5px; font-size: 16px;">${item.name}</h4>
          <p style="color: #7f8c8d; font-size: 14px;">Qty: ${item.quantity} × Rs.${item.price.toLocaleString()}</p>
        </div>
        <div style="text-align: right;">
          <p style="font-weight: bold; color: #e74c3c; font-size: 16px;">Rs.${subtotal.toLocaleString()}</p>
          <button onclick="removeFromCart(${item.id}); viewCart();" 
                  style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 5px; font-size: 12px; cursor: pointer; margin-top: 5px;">
            Remove
          </button>
        </div>
      </div>
    `;
  });
  
  cartHTML += `
      </div>
      <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #3498db;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h3 style="color: #2c3e50;">Total: </h3>
          <h3 style="color: #e74c3c; font-size: 24px;">Rs.${total.toLocaleString()}</h3>
        </div>
        <div style="display: flex; gap: 10px;">
          <button onclick="clearCart(); closeCartModal();" 
                  style="flex: 1; background: #95a5a6; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; cursor: pointer;">
            Clear Cart
          </button>
          <button onclick="proceedToCheckout(); closeCartModal();" 
                  style="flex: 2; background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; cursor: pointer;">
            🚀 Checkout
          </button>
        </div>
      </div>
    </div>
  `;
  
  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'cart-modal';
  modalOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    backdrop-filter: blur(5px);
  `;
  
  modalOverlay.innerHTML = cartHTML;
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) {
      closeCartModal();
    }
  };
  
  document.body.appendChild(modalOverlay);
}

// Function to close cart modal
function closeCartModal() {
  const modal = document.getElementById('cart-modal');
  if (modal) {
    modal.remove();
  }
}

// Function to remove item from cart
function removeFromCart(productId) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems = cartItems.filter(item => item.id !== productId);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  initializeCart();
  showToast('🗑️ Item removed from cart', 'info');
}

// Function to proceed to checkout
function proceedToCheckout() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  if (cartItems.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const confirmed = confirm(`
🛍️ Proceed to Checkout
    
💰 Total Amount: Rs.${total.toLocaleString()}
📦 Items: ${cartItems.length}

✅ Click OK to proceed to payment
❌ Click Cancel to continue shopping
  `);
  
  if (confirmed) {
    showToast('🎉 Redirecting to payment gateway...', 'success');
    
    // Simulate checkout process
    setTimeout(() => {
      showToast(`🎊 Order placed successfully! 
📧 Confirmation email sent
🚚 Delivery in 3-5 business days
💝 Thank you for shopping with SwiftStep!`, 'success');
      
      // Clear cart after successful order
      localStorage.removeItem('cartItems');
      initializeCart();
    }, 2000);
  }
}

// Enhanced function to clear cart with confirmation
function clearCart() {
  if (confirm('🗑️ Are you sure you want to clear your cart?\n\nThis action cannot be undone.')) {
    localStorage.removeItem('cartItems');
    initializeCart();
    showToast('🧹 Cart cleared successfully!', 'info');
  }
}

/* ==============================================================================
   WISHLIST FUNCTIONALITY
   ============================================================================== */

// Add item to wishlist
function addToWishlist(productId, productName, price, image) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  const existingItem = wishlist.find(item => item.id === productId);
  if (existingItem) {
    showToast('💖 Item already in wishlist!', 'info');
    return;
  }
  
  wishlist.push({
    id: productId,
    name: productName,
    price: price,
    image: image
  });
  
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  showToast(`💝 ${productName} added to wishlist!`, 'success');
}

// View wishlist
function viewWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  if (wishlist.length === 0) {
    showToast('💔 Your wishlist is empty! Add some items you love.', 'info');
    return;
  }
  
  let wishlistDisplay = 'Your Wishlist:\n\n';
  wishlist.forEach(item => {
    wishlistDisplay += `💖 ${item.name}\nPrice: Rs.${item.price.toLocaleString()}\n\n`;
  });
  
  alert(wishlistDisplay);
}

/* ==============================================================================
   PRODUCT DETAIL PAGE FUNCTIONS
   ============================================================================== */

// Change main image in product gallery

function openQuickView(productData) {
  if (!document.getElementById('quickViewModal')) {
    createQuickViewModal();
  }
  
  quickViewProduct = productData;
  
  // Populate modal with product data
  document.getElementById('quickViewImage').src = productData.image;
  document.getElementById('quickViewTitle').textContent = productData.name;
  document.getElementById('quickViewPrice').textContent = productData.price;
  document.getElementById('quickViewDescription').textContent = productData.description || "Experience premium quality and comfort with this exceptional footwear. Designed for athletes and style enthusiasts alike.";
  
  // Update features
  const features = productData.features || [
    "Premium synthetic materials",
    "Advanced cushioning technology",
    "Breathable mesh upper",
    "Durable rubber outsole",
    "Lightweight design"
  ];
  
  const featuresList = document.getElementById('quickViewFeaturesList');
  featuresList.innerHTML = '';
  features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
  
  // Show modal
  document.getElementById('quickViewModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  // Add image zoom effect
  const image = document.getElementById('quickViewImage');
  image.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    this.style.transformOrigin = `${x}% ${y}%`;
    this.style.transform = 'scale(1.5)';
  });
  
  image.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
}

function closeQuickView() {
  document.getElementById('quickViewModal').style.display = 'none';
  document.body.style.overflow = 'auto';
  quickViewProduct = null;
}

function changeQuantity(change) {
  const quantityInput = document.getElementById('quickViewQuantity');
  let currentValue = parseInt(quantityInput.value);
  let newValue = currentValue + change;
  
  if (newValue >= 1 && newValue <= 10) {
    quantityInput.value = newValue;
  }
}

function addToCartFromQuickView() {
  if (!quickViewProduct) return;
  
  const selectedSize = document.querySelector('.size-btn.selected')?.dataset.size;
  const quantity = parseInt(document.getElementById('quickViewQuantity').value);
  
  if (!selectedSize) {
    showToast("👟 Please select a size", "error");
    return;
  }
  
  const cartItem = {
    id: quickViewProduct.id,
    name: quickViewProduct.name,
    price: quickViewProduct.price,
    image: quickViewProduct.image,
    size: selectedSize,
    quantity: quantity
  };
  
  addToCart(cartItem.id, cartItem.name, cartItem.price, cartItem.image, cartItem.quantity);
  showToast(`🎉 ${quickViewProduct.name} (Size ${selectedSize}) added to cart!`, "success");
  closeQuickView();
}

function addToWishlistFromQuickView() {
  if (!quickViewProduct) return;
  
  addToWishlist(quickViewProduct.id, quickViewProduct.name, quickViewProduct.price, quickViewProduct.image);
  showToast(`❤️ ${quickViewProduct.name} added to wishlist!`, "success");
}

function viewFullProduct() {
  if (!quickViewProduct) return;
  
  closeQuickView();
  showPageTransition();
  
  // Navigate to product detail page
  setTimeout(() => {
    window.location.href = 'product-detail.html?id=' + quickViewProduct.id;
  }, 500);
}

/* ==============================================================================
   PRODUCT DETAIL PAGE FUNCTIONS
   ============================================================================== */

// Change main image in product gallery
function changeMainImage(imageSrc) {
  const mainImage = document.getElementById('mainImage');
  if (mainImage) {
    mainImage.src = imageSrc;
  }
  
  // Update active thumbnail
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumb => {
    thumb.classList.remove('active');
    if (thumb.querySelector('img').src.includes(imageSrc.split('/').pop())) {
      thumb.classList.add('active');
    }
  });
}

// Color selection
function selectColor(colorElement) {
  // Remove active class from all color options
  document.querySelectorAll('.color-option').forEach(option => {
    option.classList.remove('active');
  });
  
  // Add active class to selected option
  colorElement.classList.add('active');
  
  // Update selected color text
  const selectedColor = colorElement.getAttribute('data-color');
  const colorText = document.getElementById('selectedColor');
  if (colorText) {
    colorText.textContent = selectedColor;
  }
}

// Size selection
function selectSize(sizeElement) {
  // Remove active class from all size options
  document.querySelectorAll('.size-option').forEach(option => {
    option.classList.remove('active');
  });
  
  // Add active class to selected option
  sizeElement.classList.add('active');
}

// Quantity controls
function increaseQuantity() {
  const quantityInput = document.getElementById('quantity');
  if (quantityInput) {
    let currentValue = parseInt(quantityInput.value) || 1;
    const maxValue = parseInt(quantityInput.max) || 10;
    
    if (currentValue < maxValue) {
      quantityInput.value = currentValue + 1;
    }
  }
}

function decreaseQuantity() {
  const quantityInput = document.getElementById('quantity');
  if (quantityInput) {
    let currentValue = parseInt(quantityInput.value) || 1;
    const minValue = parseInt(quantityInput.min) || 1;
    
    if (currentValue > minValue) {
      quantityInput.value = currentValue - 1;
    }
  }
}

// Tab switching
function showTab(tabName) {
  // Hide all tab panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab panel
  const selectedPanel = document.getElementById(tabName);
  if (selectedPanel) {
    selectedPanel.classList.add('active');
  }
  
  // Add active class to corresponding tab button
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    if (btn.textContent.toLowerCase().includes(tabName)) {
      btn.classList.add('active');
    }
  });
}

// Initialize event listeners for product detail page
document.addEventListener('DOMContentLoaded', function() {
  // Color selection event listeners
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.addEventListener('click', function() {
      selectColor(this);
    });
  });
  
  // Size selection event listeners
  const sizeOptions = document.querySelectorAll('.size-option');
  sizeOptions.forEach(option => {
    option.addEventListener('click', function() {
      selectSize(this);
    });
  });
  
  // Main image zoom effect
  const mainImage = document.querySelector('.main-image');
  if (mainImage) {
    mainImage.addEventListener('click', function() {
      // Create zoom modal
      const img = this.querySelector('img');
      if (img) {
        createImageZoomModal(img.src, img.alt);
      }
    });
  }
});

// Image zoom modal function
function createImageZoomModal(imageSrc, imageAlt) {
  // Remove existing modal if any
  const existingModal = document.getElementById('imageZoomModal');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal elements
  const modal = document.createElement('div');
  modal.id = 'imageZoomModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: zoom-out;
  `;

  const imageContainer = document.createElement('div');
  imageContainer.style.cssText = `
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const zoomedImage = document.createElement('img');
  zoomedImage.src = imageSrc;
  zoomedImage.alt = imageAlt;
  zoomedImage.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  `;

  const closeButton = document.createElement('button');
  closeButton.innerHTML = '×';
  closeButton.style.cssText = `
    position: absolute;
    top: -40px;
    right: -40px;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
  `;

  closeButton.addEventListener('mouseover', function() {
    this.style.background = 'rgba(255, 255, 255, 1)';
    this.style.transform = 'scale(1.1)';
  });

  closeButton.addEventListener('mouseout', function() {
    this.style.background = 'rgba(255, 255, 255, 0.9)';
    this.style.transform = 'scale(1)';
  });

  // Close modal function
  function closeModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
      if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    }, 300);
  }

  // Event listeners
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('imageZoomModal')) {
      closeModal();
    }
  });

  // Assemble modal
  imageContainer.appendChild(zoomedImage);
  imageContainer.appendChild(closeButton);
  modal.appendChild(imageContainer);

  // Add to DOM with animation
  modal.style.opacity = '0';
  document.body.appendChild(modal);
  
  // Animate in
  setTimeout(() => {
    modal.style.transition = 'opacity 0.3s ease';
    modal.style.opacity = '1';
  }, 10);
}

// Enhanced product detail functions for better UX
function addToCartFromDetail() {
  const selectedSize = document.querySelector('.size-option.active');
  const selectedColor = document.querySelector('.color-option.active');
  const quantity = document.getElementById('quantity');
  
  if (!selectedSize) {
    showToast("⚠️ Please select a size", "error");
    return;
  }
  
  if (!selectedColor) {
    showToast("⚠️ Please select a color", "error");
    return;
  }
  
  const productInfo = {
    id: 1, // This should be dynamic based on the product
    name: document.querySelector('.product-title').textContent,
    price: parseFloat(document.querySelector('.current-price').textContent.replace('₹', '').replace(',', '')),
    image: document.getElementById('mainImage').src,
    size: selectedSize.getAttribute('data-size'),
    color: selectedColor.getAttribute('data-color'),
    quantity: parseInt(quantity.value)
  };
  
  addToCart(productInfo.id, productInfo.name, productInfo.price, productInfo.image, productInfo.quantity);
  showToast(`🛒 Added ${productInfo.name} (${productInfo.size}, ${productInfo.color}) to cart!`, "success");
}

function buyNowFromDetail() {
  const selectedSize = document.querySelector('.size-option.active');
  const selectedColor = document.querySelector('.color-option.active');
  
  if (!selectedSize) {
    showToast("⚠️ Please select a size", "error");
    return;
  }
  
  if (!selectedColor) {
    showToast("⚠️ Please select a color", "error");
    return;
  }
  
  // Add to cart first
  addToCartFromDetail();
  
  // Redirect to checkout or show checkout modal
  showToast("🚀 Redirecting to checkout...", "success");
  setTimeout(() => {
    // You can redirect to a checkout page here
    // window.location.href = 'checkout.html';
    showToast("💳 Checkout functionality will be implemented soon!", "info");
  }, 1500);
}

/* ==============================================================================
   PRODUCT CAROUSEL FUNCTIONALITY
   ============================================================================== */

function scrollCarousel(direction) {
  const carousel = document.getElementById('productsCarousel');
  if (!carousel) return;

  const cardWidth = carousel.querySelector('.product-card').offsetWidth;
  const gap = 30; // Gap between cards
  const scrollDistance = cardWidth + gap;

  if (direction === 'next') {
    carousel.scrollLeft += scrollDistance;
  } else if (direction === 'prev') {
    carousel.scrollLeft -= scrollDistance;
  }

  // Hide/show buttons based on scroll position
  updateCarouselButtons();
}

function updateCarouselButtons() {
  const carousel = document.getElementById('productsCarousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (!carousel || !prevBtn || !nextBtn) return;

  const isAtStart = carousel.scrollLeft <= 0;
  const isAtEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10;

  prevBtn.style.opacity = isAtStart ? '0.5' : '1';
  prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
  
  nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
  nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
}

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('productsCarousel');
  if (carousel) {
    carousel.addEventListener('scroll', updateCarouselButtons);
    updateCarouselButtons(); // Initial state
  }
});

/* ==============================================================================
   INTERACTIVE RATING SYSTEM
   ============================================================================== */

let currentUserRating = 0;
let isRatingSubmitted = false;

function setRating(rating) {
  if (isRatingSubmitted) return;
  
  currentUserRating = rating;
  updateRatingDisplay(rating);
  updateRatingText(rating);
  showSubmitButton();
}

function hoverRating(rating) {
  if (isRatingSubmitted) return;
  
  const stars = document.querySelectorAll('.interactive-rating i');
  stars.forEach((star, index) => {
    star.classList.remove('hover');
    if (index < rating) {
      star.classList.add('hover');
    }
  });
}

function resetHover() {
  if (isRatingSubmitted) return;
  
  const stars = document.querySelectorAll('.interactive-rating i');
  stars.forEach(star => {
    star.classList.remove('hover');
  });
}

function updateRatingDisplay(rating) {
  const stars = document.querySelectorAll('.interactive-rating i');
  stars.forEach((star, index) => {
    star.classList.remove('active');
    if (index < rating) {
      star.classList.add('active');
    }
  });
}

function updateRatingText(rating) {
  const ratingText = document.getElementById('ratingText');
  const messages = {
    1: "Poor - Not satisfied",
    2: "Fair - Below expectations",
    3: "Good - Meets expectations",
    4: "Very Good - Above expectations",
    5: "Excellent - Outstanding product!"
  };
  
  ratingText.textContent = messages[rating] || "Click stars to rate";
}

function showSubmitButton() {
  const submitBtn = document.getElementById('submitRating');
  submitBtn.style.display = 'inline-block';
}

function submitRating() {
  if (currentUserRating === 0 || isRatingSubmitted) return;
  
  isRatingSubmitted = true;
  
  // Hide submit button and show success message
  const submitBtn = document.getElementById('submitRating');
  const successMsg = document.getElementById('ratingSuccess');
  const ratingText = document.getElementById('ratingText');
  
  submitBtn.style.display = 'none';
  successMsg.style.display = 'flex';
  ratingText.textContent = `You rated this product ${currentUserRating} star${currentUserRating > 1 ? 's' : ''}`;
  
  // Disable further interaction
  const stars = document.querySelectorAll('.interactive-rating i');
  stars.forEach(star => {
    star.style.cursor = 'default';
    star.style.pointerEvents = 'none';
  });
  
  // Show toast notification
  if (typeof showToast === 'function') {
    showToast(`⭐ Thank you for rating this product ${currentUserRating} star${currentUserRating > 1 ? 's' : ''}!`, "success");
  }
  
  // You can add API call here to save the rating to your backend
  // saveRatingToServer(currentUserRating);
  
  console.log('User rating submitted:', currentUserRating);
}

/* ==============================================================================
   MOBILE HAMBURGER MENU FUNCTIONS
   ============================================================================== */

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const body = document.body;
  
  if (mobileMenu) {
    mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    // Update hamburger icon
    const hamburgerIcon = document.querySelector('.hamburger-icon i');
    if (hamburgerIcon) {
      if (mobileMenu.classList.contains('active')) {
        hamburgerIcon.className = 'bx bx-x';
      } else {
        hamburgerIcon.className = 'bx bx-menu';
      }
    }
  }
}

// Close mobile menu when clicking a link
function closeMobileMenuOnLinkClick() {
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });
}

// Close mobile menu when clicking outside
function handleMobileMenuClickOutside() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        toggleMobileMenu();
      }
    });
  }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
  closeMobileMenuOnLinkClick();
  handleMobileMenuClickOutside();
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    }
  });
}

// Add mobile menu initialization to existing DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  initializeMobileMenu();
});
