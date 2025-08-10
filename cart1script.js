     document.addEventListener("DOMContentLoaded", function () {
      const searchInput = document.getElementById("searchInput");
      const searchIcon = document.querySelector(".search-icon"); // Select the search icon
      const cartCountElement = document.querySelector(".cart-count"); // Select the cart count element
  
      // Initialize the cart from local storage or create an empty cart
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Function to update the cart count
      function updateCartCount() {
        cartCountElement.textContent = cart.length;
      }
  
      // Function to perform a search
      function performSearch() {
        const searchText = searchInput.value.trim();
        if (searchText !== "") {
          // Perform your search action here
          alert("Searching for: " + searchText);
        }
      }
  
      // Add event listener for Enter key press
      searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
          performSearch();
        }
      });
  
      // Add event listener for search icon click
      searchIcon.addEventListener("click", performSearch);
  
      // Select all buttons with a class of "add-to-cart"
      const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
      // Add event listeners to all "Add to Cart" buttons
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const productName = button.getAttribute("data-product");
    const description = button.getAttribute("data-description");
    const price = parseFloat(button.getAttribute("data-price"));

    cart.push({ name: productName, description: description, price: price });

  
          // Update the cart count
          updateCartCount();
  
          // Save the cart to local storage
          localStorage.setItem("cart", JSON.stringify(cart));
  
          alert(`${productName} added to cart`);
        });
      });
  
      // Initialize the cart count
      updateCartCount();
    });
    console.log("Product Name: ", productName);
console.log("Description: ", description);
console.log("Price: ", price);