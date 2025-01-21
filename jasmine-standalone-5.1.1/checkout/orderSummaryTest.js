import { loadFromStorage, cart } from "../../data/cart.js";
import { renderOrderSummary } from "../../script/checkout/orderSummary.js";


describe('Проверка функции: renderOrderSymmary', ()=>{
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  beforeEach(()=>{
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML = `
    <div class="js-quantity-item"></div>
    <div class="js-order-summary"></div>
    <div class="payment-summary-js"></div>
    `;
    spyOn(localStorage, 'getItem').and.callFake(()=>{
          return JSON.stringify([ {
            idProduct: productId1,
            quantity: 2,
            deliveryOptionId: '1'
          }, {
            idProduct: productId2,
            quantity: 1,
            deliveryOptionId: '2'}]);
        });
    loadFromStorage();
    renderOrderSummary();
  })
  afterEach(()=>{
    document.querySelector('.js-test-container').innerHTML = '';
  })

  it('Отображение корзины', ()=>{
        expect(
          document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2)
        expect(
          document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain('Количество: 2')
        expect(
          document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain('Количество: 1')
  })

  it('Удаление товара', ()=>{
    document.querySelector(`.js-delete-link-${productId1}`).click()
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1)
    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toEqual(null)
    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toEqual(null)
    expect(cart.length).toEqual(1)
    expect(cart[0].idProduct).toEqual(productId2)
  })
})

