class Cart {
  cartItems = undefined;
  localStorageKey = undefined;

  constructor(localStorageKey){
    this.localStorageKey = localStorageKey;
    this.loadFromStorage()
  }

  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
    if (!this.cartItems) {
      this.cartItems = [ {
        idProduct:
        'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        idProduct:
        '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'}]}
        return this.cartItems;
  };

  saveToStorage(){
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  };

  addProduct(idProduct, num){
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
      if(idProduct === cartItem.idProduct){
        matchingItem = cartItem
      }
    })
    if(matchingItem){
      matchingItem.quantity += num
    }else{
      this.cartItems.push({
        idProduct,
        quantity: num,
        deliveryOptionId: '1'
      })
    }
    this.saveToStorage();
  };

  updateQuantity(){
    let cartQuantity = document.querySelector('.cart-quantity')
    let zero = 0;
    this.cartItems.forEach((cartItem)=>{
      zero += cartItem.quantity
    })
    cartQuantity.innerHTML = zero;
  };

  updateQuantityCheckout(){
    let classItemCheckout = document.querySelector('.js-quantity-item');
    let zero = 0;
    this.cartItems.forEach((cartItem)=>{
      zero += cartItem.quantity
    })
    classItemCheckout.innerHTML = `${zero} шт.`
    return zero;
  };

  removeFromCart(idProduct) {
    const newCart = [];
  
    this.cartItems.forEach((cartItem) => {
      if (cartItem.idProduct !== idProduct) {
        newCart.push(cartItem);
      }
    });
  
    this.cartItems = newCart;
  
    this.saveToStorage();
  };

  updateDeliveryOption(idProduct, deliveryOptionId){
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
      if(idProduct === cartItem.idProduct){
        matchingItem = cartItem
      }
    })
    
    matchingItem.deliveryOptionId = deliveryOptionId
    this.saveToStorage();
  };
  
}
  

const cart = new Cart('cart-oop')
const businessCart = new Cart('cart-business')



console.log(cart);
console.log(businessCart);