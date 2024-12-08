export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 2
  }]
}


function saveToStorage(){
  localStorage.setItem('сart', JSON.stringify(cart));
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
      quantity: num
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

export function removeFromCart (productId){
  const newCart = [];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  })

  cart = newCart;

  saveToStorage()
}