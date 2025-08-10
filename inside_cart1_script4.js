var cart = []; // Initialize an empty cart array
var totalPrice = 0; // Initialize the total price

// Function to add a product to the cart
function addToCart(productName, price) {
    // Create a new list item for the cart
    var cartItem = document.createElement("li");
    cartItem.innerText = productName + " - $" + price;

    // Add the item to the cart
    document.getElementById("cart-items1").appendChild(cartItem);

    // Update the total price
    totalPrice += price;

    // Checkout
    checkoutButton.addEventListener("click", () => {
        alert(`Total: $${totalPrice.toFixed(2)}\nThank you for your order!`);
        cart = [];
        updateCart();
    });
}

// Function to update the cart display
function updateCart() {
    var cartItems1 = document.getElementById("cart-items1");
    cartItems1.innerHTML = ""; // Clear the current cart display

    // Iterate through the items in the cart (if needed)
    // You can recreate the list of items here if you want to display them

    // Display the total price
    var totalPriceElement = document.createElement("li");
    totalPriceElement.textContent = "Total: $" + totalPrice.toFixed(2);
    cartItems1.appendChild(totalPriceElement);
}

// Event listener for checkout button
var checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", () => {
    alert(`Total: $${totalPrice.toFixed(2)}\nThank you for your order!`);
    cart = []; // Clear the cart
    updateCart(); // Update the cart display
});
