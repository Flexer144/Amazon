import { addProduct, cart, loadFromStorage } from "../../data/cart.js";

describe('Тест функции: addProduct', ()=>{

  beforeEach(()=>{
    spyOn(localStorage, 'setItem')
  })

  it('Проверка на добавление в корзину', ()=>{
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([{
        idProduct: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();
    localStorage.setItem(JSON.stringify('cart'), '[]')
    expect(localStorage.setItem).toHaveBeenCalledWith(JSON.stringify('cart'), '[]')
    addProduct('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1)
    expect(cart.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(cart[0].idProduct).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
  })

  it('Добавление нового товара в корзину', ()=>{
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    loadFromStorage();
    localStorage.setItem(JSON.stringify('cart'), '[]')
    expect(localStorage.setItem).toHaveBeenCalledWith(JSON.stringify('cart'), '[]')
    addProduct('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1)
    expect(cart.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(cart[0].idProduct).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  })
})