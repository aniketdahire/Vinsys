let cartCount = 0;

function addedToCart(quantity) {
  cartCount += quantity;

  // const message = `You have ${cartCount} item${
  //   cartCount > 1 ? "s" : ""
  // } in cart`;

  document.getElementById(
    "cartStatus"
  ).textContent = `You have ${cartCount} item${
    cartCount > 1 ? "s" : ""
  } in cart`;

  // document.querySelector('#message').innerHTML=`you have ${cartCount} items in cart`;
}

function addToWishlist(quantity) {
  if (cartCount === 0) {
    // alert("Your cart is empty. Please add items to your cart first.");
    return;
  }
  cartCount -= 1; // Assuming adding to wishlist removes from cart

  document.getElementById(
    "cartStatus"
  ).textContent = `You have ${cartCount} item${
    cartCount > 1 ? "s" : ""
  } in cart`;
}
