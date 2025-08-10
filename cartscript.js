 function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      const searchInput = document.getElementById("searchInput");

      function performSearch() {
        const searchText = searchInput.value.trim();
        if (searchText !== "") {
          // Perform your search action here
          alert("Searching for: " + searchText);
        }
      }

      searchIcon.addEventListener("click", performSearch);

      searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
          performSearch();
        }
      });
    });

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

    // Check if the cart is empty and show the message
    document.addEventListener("DOMContentLoaded", function() {
      // Replace this condition with your logic to check if the cart is empty
      const isCartEmpty = true; // Change this to false if the cart is not empty
      if (isCartEmpty) {
        showCartMessage();
      }
    });
    
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
      itemPrice.textContent = `Price: ₹${item.price}`;

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
      itemPrice.textContent = `Price: ₹${item.price}`;
      
      // You can add more elements to display additional information about the product if needed
      
      cartItemDiv.appendChild(itemName);
      cartItemDiv.appendChild(itemDescription);
      cartItemDiv.appendChild(itemPrice);
      
      cartItemsContainer.appendChild(cartItemDiv);
    });
  }
}

// Call the function to populate cart items when the page loads
document.addEventListener("DOMContentLoaded", function () {
  populateCartItems();
});