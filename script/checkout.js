import {cart, removeFromCart, updateQuantityCheckout} from '../data/cart.js';
import {products} from '../data/products.js';

dayjs.extend(dayjs_plugin_localizedFormat);
dayjs.locale('ru');

const today = dayjs();
const deliveryDate = today.add(7, 'Days')
console.log(deliveryDate.format('dddd, MMMM D')); // Например, "14 октября 2023 г."


updateQuantityCheckout()
let productHTML = '';

cart.forEach((cartProduct)=>{
  const productId = cartProduct.idProduct;
  let matchingProduct;
  products.forEach((product)=>{
    if(product.id === productId){
      matchingProduct = product;
    }
  })
  
if(matchingProduct){
  productHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Дата доставки: Среда, 21 декабря
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
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="${matchingProduct.name}">
            <div>
              <div class="delivery-option-date">
                Среда, 21 декабря
              </div>
              <div class="delivery-option-price">
                Бесплатная доставка
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="${matchingProduct.name}">
            <div>
              <div class="delivery-option-date">
                Пятница, 16 декабря
              </div>
              <div class="delivery-option-price">
                Доставка - 500₽
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="${matchingProduct.name}">
            <div>
              <div class="delivery-option-date">
                Понедельник, 12 декабря
              </div>
              <div class="delivery-option-price">
                Доставка - 1000₽
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  `
}
})

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