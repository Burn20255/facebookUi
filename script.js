const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // You can save this data to localStorage or send to server here
  alert("Registered Successfully!");

  // Clear Form
  registerForm.reset();
});
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  // Simple login check (You can replace with real authentication here)
  if (email === "test@example.com" && password === "password") {
    alert("Login Successful!");
    // Redirect to Dashboard or Home page
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Email or Password");
  }

  // Clear Form
  loginForm.reset();
});
// You can add more interactive features here if needed

const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    alert("Added to Cart!");
    // You can implement cart functionality here (e.g., storing in localStorage)
  });
});
// Edit Profile Button
const editButton = document.getElementById('editProfile');
const profileInputs = document.querySelectorAll('.profile-info input');

editButton.addEventListener('click', function() {
  profileInputs.forEach(input => {
    input.disabled = !input.disabled;  // Toggle input disabled state
  });

  if (editButton.textContent === 'Edit Profile') {
    editButton.textContent = 'Save Changes';
  } else {
    editButton.textContent = 'Edit Profile';
    alert('Profile Updated!');
  }
});

// Change Password Button
const changePasswordButton = document.getElementById('changePassword');

changePasswordButton.addEventListener('click', function() {
  const newPassword = prompt("Enter new password:");
  if (newPassword) {
    alert("Password Changed Successfully!");
  }
});
// Remove item from cart
const removeButtons = document.querySelectorAll('.remove-item');

removeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateTotal();
  });
});

// Update the total price
function updateTotal() {
  const prices = document.querySelectorAll('.cart-item p');
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent.replace('$', ''));
  });

  const totalPrice = document.querySelector('.cart-summary h3');
  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

// Checkout button
const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', function() {
  alert("Proceeding to checkout...");
  // You can add your checkout process here
});
// View Details Button
const viewDetailsButtons = document.querySelectorAll('.view-details');

viewDetailsButtons.forEach(button => {
  button.addEventListener('click', function() {
    const orderId = button.closest('.order-item').querySelector('h4').textContent;
    alert(`Viewing details for ${orderId}`);
    // You can implement order detail view here (e.g., redirect to order detail page)
  });
});
// Place Order Button
const placeOrderButton = document.getElementById('placeOrder');

placeOrderButton.addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const creditCard = document.getElementById('credit-card').value;

  if (name && address && phone && creditCard) {
    alert("Your order has been placed successfully!");
    // Implement further order processing (e.g., saving to database, payment gateway, etc.)
  } else {
    alert("Please fill in all fields before placing the order.");
  }
});
// Track Order Button
const trackOrderButton = document.getElementById('trackOrder');

trackOrderButton.addEventListener('click', function() {
  alert("Tracking information will be available soon!");
  // You can implement order tracking functionality here (e.g., redirect to tracking page)
});
