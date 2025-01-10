import {cart, removeFromCart, updateQuantityCheckout, updateDeliveryOption} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';
import { renderPaymentSummary } from './paymentSummary.js';
import {deliveryOptions, getDeliveryOption} from '../../data/deliveryOptions.js';
updateQuantityCheckout()

dayjs.extend(dayjs_plugin_localizedFormat);
dayjs.locale('ru');


export function renderOrderSummary(){
  let productHTML = '';

  cart.forEach((cartProduct)=>{
    const productId = cartProduct.idProduct;
    let matchingProduct = getProduct(productId)

    const deliveryOptionId = cartProduct.deliveryOptionId
    const deliveryOption = getDeliveryOption(deliveryOptionId)

    const today = dayjs();
    let dateString = '';
    if (deliveryOption) {
      const deliveryDate = today.add(
        deliveryOption.deliveryDate,
        'days'
      );
      dateString = deliveryDate.format('dddd, D MMMM');
    } else {
      console.error('Delivery option not found for ID:', deliveryOptionId);
    }
    
  if(matchingProduct){
    productHTML += `
      <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Дата доставки: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
            ${matchingProduct.name}
            </div>
            <div class="product-price">
            ${matchingProduct.priceCents}₽
            </div>
            <div class="product-quantity">
              <span>
                Количество: <span class="quantity-label">${cartProduct.quantity}</span>
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                &#10006;
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Выберите вариант доставки:
            </div>
            ${deliveryOptionsHTML(matchingProduct, cartProduct)}
          </div>
        </div>
      </div>  
    `
  }
  });

  function deliveryOptionsHTML(matchingProduct, cartItem){
    let html = '';
    deliveryOptions.forEach((deliveryOption)=>{
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDate,
        'days'
      )
      const dateString = deliveryDate.format(
        'dddd, D MMMM'
      )
      const priceString = deliveryOption.price === 0 ? 'Бесплатно' : `Доставка - ${deliveryOption.price}₽`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId

      html += `
      <div class="delivery-option js-delivery-option" 
      data-product-id="${matchingProduct.id}"
      data-delivery-option-id="${deliveryOption.id}"
      >
        <input type="radio"
          ${isChecked ? 'checked' : ''}
          class="delivery-option-input"
          name="${matchingProduct.name}">
        <div>
          <div class="delivery-option-date">
            ${dateString}
          </div>
          <div class="delivery-option-price">
            ${priceString}
          </div>
        </div>
      </div>
      `
    })
    return html


  };

  document.querySelector('.js-order-summary').innerHTML = productHTML;




  document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click', ()=>{
      const idProduct = link.dataset.productId
      removeFromCart(idProduct)

      const productContainer = document.querySelector(`.js-cart-item-container-${idProduct}`)
      console.log(productContainer)
      productContainer.remove()
      updateQuantityCheckout()
      })
  })


  document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const idProduct = element.dataset.productId
        const deliveryOptionId = element.dataset.deliveryOptionId
        updateDeliveryOption(idProduct, deliveryOptionId)
        renderOrderSummary()
        renderPaymentSummary()
      });

    });
};