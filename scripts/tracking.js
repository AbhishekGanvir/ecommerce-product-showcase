// tracking.js
import { cart } from "../data/cart.js";
import { getCartItemDetails } from "../scripts/helper/CartItemDetails.js";

// 1. Get productId from query string
const urlParams = new URLSearchParams(window.location.search);
const targetProductId = urlParams.get('productId');

let cartTrackHTML = '';

// 2. Find the cart item that matches the productId
const targetCartItem = cart.find(cartItem => cartItem.productId === targetProductId);

if (targetCartItem) {
  const { product, quantity, dateString } = getCartItemDetails(targetCartItem);

  cartTrackHTML += `
    <div class="order-track-card">
      

      <div class="delivery-date">Arriving on ${dateString}</div>

      <div class="product-info">${product.name}</div>

      <div class="product-info">Quantity: ${quantity}</div>
       <a  href="product_gallery.html?id=${product.id}">
      <img class="product-image" src="${product.image}" alt="${product.name}">
          </a>
      <div class="progress-labels-container">
        <div class="progress-label">Preparing</div>
        <div class="progress-label current-status">Shipped</div>
        <div class="progress-label">Delivered</div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
    </div>
  `;
} else {
  cartTrackHTML = `<p>Product not found or tracking info missing.</p>`;
}

document.querySelector('.js-order-track').innerHTML = cartTrackHTML;
