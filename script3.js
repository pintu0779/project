function addToCart(productName, price) {
    // Create a new list item for the cart
    var cartItem = document.createElement("li");
    cartItem.innerText = productName + " - $" + price;

    // Add the item to the cart
    document.getElementById("cart-items").appendChild(cartItem);
    
    // Checkout
    checkoutButton.addEventListener("click", () => {
        alert(`Total: $${totalPrice.textContent}\nThank you for your order!`);
        cart = [];
        updateCart();
    });
}
