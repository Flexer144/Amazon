export const deliveryOptions =  [{
  id: '1',
  deliveryDate: 13,
  price: 0
},{
  id: '2',
  deliveryDate: 5,
  price: 199
},{
  id: '3',
  deliveryDate: 1,
  price: 299
}
]

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;
    deliveryOptions.forEach((option)=>{
      if(option.id === deliveryOptionId){
        deliveryOption = option;
      }
    });

    return deliveryOption || deliveryOptions[0]
}