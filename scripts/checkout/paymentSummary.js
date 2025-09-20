import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import {formatCurrency} from '../../utils/money.js'

export function renderpaymentSummary(){
let productPriceCents = 0;
let ShippingPriceCents = 0;
 let cartQuantity = 0

    cart.forEach((cartItem) => {
    const product =    getProduct(cartItem.productId);
   productPriceCents += product.priceCents * cartItem.quantity

 cartQuantity += cartItem.quantity;

 const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
  
  ShippingPriceCents += deliveryOption.priceCents;

    });
    const totalBeforeTaxCents = productPriceCents + ShippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.18;
    const totalCents = totalBeforeTaxCents + taxCents;

    const paymentSummaryHTML =`
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money">₹${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">₹${ShippingPriceCents}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">₹${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (18%):</div>
            <div class="payment-summary-money">₹${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">₹${formatCurrency(totalCents)}</div>
          </div>
<a href="orders.html"  >
          <button class="place-order-button button-primary">
            Place your order
          </button></a>
        `;
        document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}