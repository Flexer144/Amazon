import { addProduct, cart, loadFromStorage } from "../../data/cart.js";

describe('Тест функции: addProduct', ()=>{
  it('Проверка на добавление в корзину', ()=>{
    spyOn(localStorage, 'setItem')

    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([{
        idProduct: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();

    addProduct('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1)
    expect(cart.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].idProduct).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
  })

  it('Добавление нового товара в корзину', ()=>{

    spyOn(localStorage, 'setItem')

    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    loadFromStorage();

    addProduct('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1)
    expect(cart.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].idProduct).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  })
})