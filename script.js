function subscribeUser(event) {
  event.preventDefault();
  alert("Thank you for subscribing.");
}

// ---------- SESSION STORAGE: SHOPPING CART ----------
function getCartItems() {
  const cart = sessionStorage.getItem("cartItems");
  return cart ? JSON.parse(cart) : [];
}

function saveCartItems(items) {
  sessionStorage.setItem("cartItems", JSON.stringify(items));
}

function addToCart(itemName) {
  const items = getCartItems();
  items.push(itemName);
  saveCartItems(items);
  alert("Item added to the cart.");
}

function viewCart() {
  const items = getCartItems();
  const cartOutput = document.getElementById("cartOutput");
  const cartModal = document.getElementById("cartModal");

  if (!cartOutput || !cartModal) return;

  if (items.length === 0) {
    cartOutput.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    let list = "<ul>";
    for (let i = 0; i < items.length; i++) {
      list += "<li>" + items[i] + "</li>";
    }
    list += "</ul>";
    cartOutput.innerHTML = list;
  }

  cartModal.style.display = "block";
}

function closeCart() {
  const cartModal = document.getElementById("cartModal");
  if (cartModal) {
    cartModal.style.display = "none";
  }
}

function clearCart() {
  sessionStorage.removeItem("cartItems");

  const cartOutput = document.getElementById("cartOutput");
  if (cartOutput) {
    cartOutput.innerHTML = "<p>Your cart is empty.</p>";
  }

  alert("Cart cleared.");
}

function processOrder() {
  sessionStorage.removeItem("cartItems");

  const cartOutput = document.getElementById("cartOutput");
  if (cartOutput) {
    cartOutput.innerHTML = "<p>Your cart is empty.</p>";
  }

  alert("Thank you for your order.");
}

// ---------- LOCAL STORAGE: CUSTOM ORDER ----------
function submitMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const custom = document.getElementById("custom").checked;

  const orderInfo = {
    name: name,
    email: email,
    phone: phone,
    message: message,
    customOrder: custom
  };

  localStorage.setItem("bookHavenCustomOrder", JSON.stringify(orderInfo));

  alert("Thank you for your message.");
}
