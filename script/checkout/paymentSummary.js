import { cart } from "../../data/cart.js"
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";


export function renderPaymentSummary(){
  let productPrice = 0;
  let shipingPrice = 0;
  
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.idProduct);
    productPrice += product.priceCents * cartItem.quantity
    
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shipingPrice += deliveryOption.price;
  });

  const totalBeforeTax = productPrice + shipingPrice
  const tax = totalBeforeTax * 0.1

  const totalOrderPrice = totalBeforeTax + tax
  console.log(productPrice, shipingPrice, totalBeforeTax, tax, totalOrderPrice)
}