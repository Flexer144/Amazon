export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [ {
    idProduct:
    'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    idProduct:
    '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'}]}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addProduct(idProduct, num){
  let matchingItem;

  cart.forEach((cartItem) => {
    if(idProduct === cartItem.idProduct){
      matchingItem = cartItem
    }
  })
  if(matchingItem){
    matchingItem.quantity += num
  }else{
    cart.push({
      idProduct,
      quantity: num,
      deliveryOptionId: '1'
    })
  }
  saveToStorage();
}

export function updateQuantity(){
  let cartQuantity = document.querySelector('.cart-quantity')
  let zero = 0;
  cart.forEach((cartItem)=>{
    zero += cartItem.quantity
  })
  cartQuantity.innerHTML = zero;
}
export function updateQuantityCheckout(){
  let classItemCheckout = document.querySelector('.js-quantity-item');
  let zero = 0;
  cart.forEach((cartItem)=>{
    zero += cartItem.quantity
  })
  classItemCheckout.innerHTML = `${zero} шт.`
  return zero;
}

export function removeFromCart(idProduct) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.idProduct !== idProduct) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}
export function updateDeliveryOption(idProduct, deliveryOptionId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if(idProduct === cartItem.idProduct){
      matchingItem = cartItem
    }
  })
  
  matchingItem.deliveryOptionId = deliveryOptionId
  console.log(matchingItem.deliveryOptionId)
  saveToStorage();
}
