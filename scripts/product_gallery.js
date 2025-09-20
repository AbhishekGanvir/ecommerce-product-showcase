import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "../utils/money.js";

// --- grab product by id from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const product = products.find(p => p.id === productId);

// --- render
let html = "";
if (product) {
  const thumbs = product.product_gallery_img
    .map((src, i) => `
      <div class="thumbnail ${i === 0 ? "active" : ""}">
        <img src="${src}" alt="Thumbnail ${i + 1}">
      </div>
    `).join("");

  html = `
    <div class="product-gallery">
      <div class="main-image">
        <img src="${product.product_gallery_img[0]}" alt="${product.name}">
        <button class="prev-btn mobile-only"><img src="./images/icon-previous.svg" alt="Previous"></button>
        <button class="next-btn mobile-only"><img src="./images/icon-next.svg" alt="Next"></button>
      </div>
      <div class="thumbnails desktop-only">
        ${thumbs}
      </div>
    </div>

    <div class="product-details">
      <p class="company">${product.company}</p>
      <h1>${product.name}</h1>
      <p class="description">${product.description}</p>

      <div class="price-container">
        <div class="current-price">
          <span class="price">₹${formatCurrency(product.priceCents)}</span>
        </div>
      </div>

      <div class="actions">
        <div class="quantity-selector">
          <button class="minus" type="button">−</button>
          <span class="quantity js-selected-quantity">1</span>
          <button class="plus" type="button">+</button>
        </div>
        <button class="add-to-cart js-add-to-cart" data-product-id="${product.id}">
          Add to cart
        </button>
      </div>
    </div>
  `;
} else {
  html = `<p>Product not found.</p>`;
}

document.querySelector(".js-product-gallery").innerHTML = html;

// --- helpers
function updateCartBadges() {
  // update every cart badge on the page (e.g., header, drawer, etc.)
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".js-cart-quantity").forEach(el => {
    el.textContent = total;
  });
}

// --- wire up only if product exists
if (product) {
  // quantity controls
  const qtyEl = document.querySelector(".js-selected-quantity");
  const plusBtn = document.querySelector(".plus");
  const minusBtn = document.querySelector(".minus");
  let selectedQty = 1;

  const setQty = (n) => {
    selectedQty = Math.max(0, n);
    qtyEl.textContent = selectedQty;
  };

  plusBtn.addEventListener("click", () => setQty(selectedQty + 1));
  minusBtn.addEventListener("click", () => setQty(selectedQty - 1));

  // add to cart
  const addBtn = document.querySelector(".js-add-to-cart");
  addBtn.addEventListener("click", () => {
    if (selectedQty === 0) return;

    // If your addToCart accepts (id, qty) use that; otherwise loop:
    if (addToCart.length >= 2) {
      addToCart(product.id, selectedQty);
    } else {
      for (let i = 0; i < selectedQty; i++) addToCart(product.id);
    }

    updateCartBadges();         // refresh header badge(s)
    setQty(1);                  // reset selector to 1
  });

  // --- gallery controls
  const mainImg = document.querySelector(".product-gallery .main-image img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const thumbnails = [...document.querySelectorAll(".product-gallery .thumbnail")];
  let currentIdx = 1;
  const images = product.product_gallery_img;

  const showImage = (idx) => {
    currentIdx = idx;
    mainImg.src = images[currentIdx];
    thumbnails.forEach((t, i) => t.classList.toggle("active", i === currentIdx));
  };

  if (prevBtn) prevBtn.addEventListener("click", () => {
    showImage((currentIdx - 1 + images.length) % images.length);
  });

  if (nextBtn) nextBtn.addEventListener("click", () => {
    showImage((currentIdx + 1) % images.length);
  });

  thumbnails.forEach((thumb, i) => {
    thumb.addEventListener("click", () => showImage(i));
  });

  showImage(0);
}
