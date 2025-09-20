// helpers/cartItemDetails.js
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function getCartItemDetails(cartItem) {
  const product = getProduct(cartItem.productId);
  const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
  const deliveryDate = dayjs().add(deliveryOption.deliveryDays, 'days');
  const dateString = deliveryDate.format('dddd, MMMM D');

  return {
    product,
    quantity: cartItem.quantity,
    dateString,
  };
}
