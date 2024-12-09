import {cart, removeFromCart, updateQuantityCheckout} from '../data/cart.js';
import {products} from '../data/products.js';

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
        Delivery date: Tuesday, June 21
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
              Quantity: <span class="quantity-label">${cartProduct.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="${matchingProduct.name}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="${matchingProduct.name}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                500₽ - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="${matchingProduct.name}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                1000₽ - Shipping
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
