import { cart,addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "../utils/money.js";

let productsHTML = '';



products.forEach((product) => {
   productsHTML += `
   
   <div class="product-container">
   <a style="text-decoration: none; color:black;" href="product_gallery.html?id=${product.id}">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>
         <div class="product-name ">${product.company}</div>
          <div class="product-company limit-text-to-2-lines">
            ${product.name}
          </div>
           

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10 }.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ₹${formatCurrency(product.priceCents) }
          </div>

          
    </a>
          <button class="add-to-cart-button button-primary  js-add-to-cart"
             data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`
    });


    document.querySelector('.js-products-grid').innerHTML = productsHTML;

    // Cart update function
  function updateCartQuantity(){   
     let cartQuantity = 0;
     cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
     });

     document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
       console.log(cart);
  }


    document.querySelectorAll('.js-add-to-cart').forEach( (button) => {
    button.addEventListener('click', () => { 
       const productId = button.dataset.productId;
       addToCart(productId);
       updateCartQuantity();
      });
    });

    // Auto-update year for footer
  document.getElementById("year").textContent = new Date().getFullYear();