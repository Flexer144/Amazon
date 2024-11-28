import {cart} from '../data/cart.js';
import {products} from '../data/products.js';

let productHTML = '';


products.forEach((products) => {
  productHTML +=  `
           <div class="product-container">
              <div class="product-image-container">
                <img class="product-image"
                  src="${products.image}">
              </div>

              <div class="product-name limit-text-to-2-lines">
                ${products.name}
              </div>

              <div class="product-rating-container">
                <img class="product-rating-stars"
                  src="images/ratings/rating-${products.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                  ${products.rating.count}
                </div>
              </div>

              <div class="product-price">
                ${products.priceCents}₽
              </div>

              <div class="product-quantity-container">
                <select class="js-quantity-selector-${products.id}"> 
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div class="product-spacer"></div>

              <div class="added-to-cart js-${products.id}">
                <img src="images/icons/checkmark.png">
                Added
              </div>

              <button class="add-to-cart-button button-primary js-add-to-card" data-product-id="${products.id}">
                Add to Cart
              </button>
            </div>
  `
});
document.querySelector('.products-grid').innerHTML = productHTML;
let cartQuantity = document.querySelector('.cart-quantity')

document.querySelectorAll('.js-add-to-card').forEach((button) => {
  button.addEventListener('click', () => {
    const {productId} = button.dataset

    let matchingItem;

    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item
      }
    })

    const quantityProduct = document.querySelector(`.js-quantity-selector-${productId}`)
    const num =  Number(quantityProduct.value)

    if(matchingItem){
      matchingItem.quantity += num
    }else{
      cart.push({
        productId,
        quantity: num
      })
    }

    let zero = 0;
    cart.forEach((item)=>{
      zero += item.quantity
    })
    cartQuantity.innerHTML = zero;

    const messageAdd = document.querySelector(`.js-${productId}`);
    messageAdd.classList.add('massage')
    setTimeout(()=>{
      messageAdd.classList.remove('massage')
    }, 2000)


  })
})