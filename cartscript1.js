
// Function to show the cart message
function showCartMessage() {
  const cartMessage = document.getElementById("cart-message");
  cartMessage.style.display = "flex"; // Change to flex to center vertically
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Function to hide the cart message
function hideCartMessage() {
  const cartMessage = document.getElementById("cart-message");
  cartMessage.style.display = "none";
  document.body.style.overflow = "auto"; // Allow scrolling
}

// Function to remove an item from the cart
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem("cart", JSON.stringify(cart));
    populateCartItems(); // Update the cart display
  }
}
        
// Function to populate the cart items on the cart page
function populateCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear the existing content

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    showCartMessage(); // Show the cart message if the cart is empty
  } else {
    // Hide the cart message if the cart is not empty
    hideCartMessage();
    
     

    // Loop through the cart items and create elements to display them
    cart.forEach((item, index) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
      

      const itemName = document.createElement("h3");
      itemName.textContent = item.name;

      const itemDescription = document.createElement("p");
      itemDescription.textContent = item.description;
      

      const itemPrice = document.createElement("p");
      itemPrice.textContent = `Price: {item.price}`;
      
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-item"); // Add a class for identifying remove buttons
      removeButton.addEventListener("click", () => removeFromCart(index));

      cartItemDiv.appendChild(itemName);
      cartItemDiv.appendChild(itemDescription);
      cartItemDiv.appendChild(itemPrice);
      cartItemDiv.appendChild(removeButton);

      cartItemsContainer.appendChild(cartItemDiv);
      
      
    });
  }
}



// Call the function to populate cart items when the page loads
document.addEventListener("DOMContentLoaded", function () {
  populateCartItems();
});
