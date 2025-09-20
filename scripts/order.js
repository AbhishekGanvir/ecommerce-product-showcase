// order.js
import { cart } from "../data/cart.js";
import { getCartItemDetails } from "../scripts/helper/CartItemDetails.js";
import { formatCurrency } from "../utils/money.js";

let cartOrderHTML = '';

cart.forEach((cartItem) => {
  const { product, quantity, dateString } = getCartItemDetails(cartItem);

  cartOrderHTML += `
    <div class="order-container">
      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${dateString}</div>
          </div>
          <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>₹${formatCurrency(product.priceCents)}</div>
          </div>
        </div>
        <div class="order-header-right-section">
          <div class="order-header-label">Order ID:</div>
          ${product.id}
        </div>
      </div>

      <div class="order-details-grid">
      <a  href="product_gallery.html?id=${product.id}">
        <div class="product-image-container">
          <img src="${product.image}">
        </div>
        </a>
        <div class="product-details">
          <div class="product-name">${product.name}</div>
          <div class="product-delivery-date">Arriving on: ${dateString}</div>
          <div class="product-quantity">Quantity: ${quantity}</div>
        </div>

        <div class="product-actions">
          <a href="tracking.html?productId=${product.id}">
            <button class="track-package-button button-secondary">
              Track package
            </button>
          </a>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-order-list').innerHTML = cartOrderHTML;
