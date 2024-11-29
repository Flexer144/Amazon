export const cart = [{
  productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
  quantity: 2
},
{
  productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
  quantity: 2
}]

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