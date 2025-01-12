import { cart, updateQuantityCheckout } from "../../data/cart.js"
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
  const tax = Math.round(totalBeforeTax * 0.1)

  const totalOrderPrice = totalBeforeTax + tax

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Оформление заказа
    </div>

    <div class="payment-summary-row">
      <div>Всего (${updateQuantityCheckout()}):</div>
      <div class="payment-summary-money">${productPrice} ₽</div>
    </div>

    <div class="payment-summary-row">
      <div>Доставка:</div>
      <div class="payment-summary-money">${shipingPrice} ₽</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Итого (без налога):</div>
      <div class="payment-summary-money">${totalBeforeTax} ₽</div>
    </div>

    <div class="payment-summary-row">
      <div>Налог (10%):</div>
      <div class="payment-summary-money">${tax} ₽</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>К оформлению:</div>
      <div class="payment-summary-money">${totalOrderPrice} ₽</div>
    </div>

    <button class="place-order-button button-primary">
      Заказать
    </button>
  `

  document.querySelector('.payment-summary-js').innerHTML = paymentSummaryHTML;
}