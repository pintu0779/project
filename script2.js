document.addEventListener("DOMContentLoaded", function () {
    const foodList = document.getElementById("food-list");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout");

    const menu = [
        { name: "Burger", price: 5.99 },
        { name: "Pizza", price: 9.99 },
        { name: "Salad", price: 4.99 },
        // Add more menu items here
    ];

    let cart = [];

    // Display the menu
    menu.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price}`;
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.addEventListener("click", () => addToCart(item));
        li.appendChild(addButton);
        foodList.appendChild(li);
    });

    // Add item to the cart
    function addToCart(item) {
        cart.push(item);
        updateCart();
    }

    // Update the cart display
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.name;
            const price = document.createElement("span");
            price.textContent = `$${item.price}`;
            li.appendChild(price);
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = total.toFixed(2);
    }

    // Checkout
    checkoutButton.addEventListener("click", () => {
        alert(`Total: $${totalPrice.textContent}\nThank you for your order!`);
        cart = [];
        updateCart();
    });
});
