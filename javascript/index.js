const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");

function openCart() {
  cartDrawer.classList.add("active");
  overlay.classList.add("active");
}

function closeCart() {
  cartDrawer.classList.remove("active");
  overlay.classList.remove("active");
}
