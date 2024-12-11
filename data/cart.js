export let cart = JSON.parse(localStorage.getItem('cart'));

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
