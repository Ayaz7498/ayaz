let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  // Clear the cart display
  cartItems.innerHTML = "";

  // Add each item to the cart display
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  // Update the total
  totalElement.textContent = total.toFixed(2);
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Order placed! Total: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
  }
}