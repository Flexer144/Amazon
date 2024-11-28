export const cart = []

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
}

export function updateQuantity(){
  let cartQuantity = document.querySelector('.cart-quantity')
  let zero = 0;
  cart.forEach((cartItem)=>{
    zero += cartItem.quantity
  })
  cartQuantity.innerHTML = zero;
}