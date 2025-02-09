export function getProduct(productId){
  let matchingProduct;
  
    products.forEach((product)=>{
      if(product.id === productId){
        matchingProduct = product;
      }
    })

    return matchingProduct;
}

//Создание класа
class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails){
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl(){
    return `images/ratings/rating-${this.rating.stars * 10}.png`
  }

  extraInfoHTML(){
    return ``;
  }
}

//Создание класса унаследовавшего методы и свойства класса Product
class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails){
    super(productDetails)
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML(){
    return `
      <a href="${this.sizeChartLink}" target="_blank">Size chart</a>
    `;
  }
}


export let products = [];

export function loadProductsFetch() {
  const promise = fetch(
    'https://supersimplebackend.dev/products'
  ).then((response)=>{
      return response.json()
  }).then((productData)=>{
    products = productData.map((productDetails)=>{
      if(productDetails.type === 'одежда'){
        return new Clothing(productDetails)
      }else {
        return new Product(productDetails)
      }
    })
    console.log(productData)
  })
  return promise
}
/*
loadProductsFetch().then(()=>{
  console.log('next step')
})
  */

export function loadProducts(fun){
  const xhr = new XMLHttpRequest()
  xhr.addEventListener('load', ()=>{
    products = JSON.parse(xhr.response).map((productDetails)=>{
      if(productDetails.type === 'одежда'){
        return new Clothing(productDetails)
      }else {
        return new Product(productDetails)
      }
    })
    fun()
  })
  xhr.open('GET', 'https://supersimplebackend.dev/products')
  xhr.send();
}



/*
export const products = [
  {
    "id": "aad29d11-ea98-41ee-9285-b916638cac4a",
    "image": "images/products/round-sunglasses-black.jpg",
    "name": "Круглые солнцезащитные очки",
    "rating": {
      "stars": 4.5,
      "count": 30
    },
    "priceCents": 1560,
    "keywords": [
      "аксессуары",
      "оттенки"
    ]
  },
  {
    "id": "04701903-bc79-49c6-bc11-1af7e3651358",
    "image": "images/products/women-beach-sandals.jpg",
    "name": "Женские сандалии с двумя ремешками и пряжками, светло-коричневый",
    "rating": {
      "stars": 4.5,
      "count": 562
    },
    "priceCents": 2499,
    "keywords": [
      "обувь",
      "сандалии",
      "Женский",
      "пляж",
      "лето"
    ]
  },
  {
    "id": "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    "image": "images/products/blackout-curtain-set-beige.webp",
    "name": "Комплект плотных штор (4 шт.) — бежевый",
    "rating": {
      "stars": 4.5,
      "count": 232
    },
    "priceCents": 4599,
    "keywords": [
      "спальня",
      "шторы",
      "дом"
    ]
  },
  {
    "id": "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    "image": "images/products/men-slim-fit-summer-shorts-gray.jpg",
    "name": "Мужские летние шорты узкого кроя",
    "rating": {
      "stars": 4,
      "count": 160
    },
    "priceCents": 1699,
    "keywords": [
      "шорты",
      "одежда",
      "Мужской"
    ]
  },
  {
    "id": "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    "image": "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    "name": "Электрический чайник для горячей воды из стекла и стали - 1,7 литра",
    "rating": {
      "stars": 5,
      "count": 846
    },
    "priceCents": 3074,
    "keywords": [
      "водогрейный котел",
      "техника",
      "кухня"
    ]
  },
  {
    "id": "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    "image": "images/products/facial-tissue-2-ply-18-boxes.jpg",
    "name": "Ультрамягкая двухслойная ткань — 18 коробок",
    "rating": {
      "stars": 4,
      "count": 99
    },
    "priceCents": 2374,
    "keywords": [
      "клинекс",
      "ткани",
      "кухня",
      "коробка для салфеток",
      "салфетки"
    ]
  },
  {
    "id": "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    "image": "images/products/straw-sunhat.webp",
    "name": "Соломенная шляпа спасателя от солнца",
    "rating": {
      "stars": 4,
      "count": 215
    },
    "priceCents": 2200,
    "keywords": [
      "шляпы",
      "соломенные шляпы",
      "лето",
      "одежда"
    ]
  },
  {
    "id": "e4f64a65-1377-42bc-89a5-e572d19252e2",
    "image": "images/products/sky-flower-stud-earrings.webp",
    "name": "Серьги-гвоздики из стерлингового серебра с небесным цветком",
    "rating": {
      "stars": 4.5,
      "count": 52
    },
    "priceCents": 1799,
    "keywords": [
      "ювелирные изделия",
      "аксессуары",
      "Женский"
    ]
  },
  {
    "id": "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    "image": "images/products/women-stretch-popover-hoodie-black.jpg",
    "name": "Женская толстовка с капюшоном-поповер",
    "rating": {
      "stars": 4.5,
      "count": 2465
    },
    "priceCents": 1374,
    "keywords": [
      "с капюшоном",
      "толстовки",
      "свитера",
      "Женский",
      "одежда"
    ],
    "type": "одежда",
    "sizeChartLink": "images/одежда-размер-диаграмма.png"
  },
  {
    "id": "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    "image": "images/products/bathroom-rug.jpg",
    "name": "Коврик для ванной комнаты 20 x 31 дюйм - серый",
    "rating": {
      "stars": 4.5,
      "count": 119
    },
    "priceCents": 1250,
    "keywords": [
      "коврик для ванной",
      "ванная комната",
      "дом"
    ]
  },
  {
    "id": "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    "image": "images/products/women-knit-ballet-flat-black.jpg",
    "name": "Женские вязаные балетки",
    "rating": {
      "stars": 4,
      "count": 326
    },
    "priceCents": 2640,
    "keywords": [
      "обувь",
      "квартиры",
      "Женский",
      "обувь"
    ]
  },
  {
    "id": "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    "image": "images/products/men-golf-polo-t-shirt-blue.jpg",
    "name": "Мужская быстросохнущая рубашка-поло для гольфа стандартного кроя",
    "rating": {
      "stars": 4.5,
      "count": 2556
    },
    "priceCents": 1599,
    "keywords": [
      "футболки",
      "рубашки",
      "одежда",
      "Мужской"
    ],
    "type": "одежда",
    "sizeChartLink": "images/одежда-размер-диаграмма.png"
  },
  {
    "id": "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    "image": "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    "name": "Мусорный бак с ножной педалью – матовая нержавеющая сталь",
    "rating": {
      "stars": 4.5,
      "count": 2286
    },
    "priceCents": 8300,
    "keywords": [
      "мусор",
      "контейнеры",
      "банки",
      "кухня"
    ]
  },
  {
    "id": "19c6a64a-5463-4d45-9af8-e41140a4100c",
    "image": "images/products/duvet-cover-set-blue-twin.jpg",
    "name": "Комплект пододеяльников с застежкой-молнией",
    "rating": {
      "stars": 4,
      "count": 456
    },
    "priceCents": 2399,
    "keywords": [
      "спальня",
      "простыни",
      "листы",
      "обложки",
      "дом"
    ]
  },
  {
    "id": "d2785924-743d-49b3-8f03-ec258e640503",
    "image": "images/products/women-chunky-beanie-gray.webp",
    "name": "Женская массивная шапка-бини - серая",
    "rating": {
      "stars": 5,
      "count": 83
    },
    "priceCents": 1250,
    "keywords": [
      "шляпы",
      "зимние шапки",
      "шапочки",
      "туки",
      "одежда",
      "Женский"
    ]
  },
  {
    "id": "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    "image": "images/products/men-chino-pants-beige.jpg",
    "name": "Мужские брюки чинос классического кроя со складками",
    "rating": {
      "stars": 4.5,
      "count": 9017
    },
    "priceCents": 2290,
    "keywords": [
      "брюки",
      "одежда",
      "Мужской"
    ]
  },
  {
    "id": "1c079479-8586-494f-ab53-219325432536",
    "image": "images/products/men-athletic-shoes-green.jpg",
    "name": "Мужские спортивные кроссовки",
    "rating": {
      "stars": 4,
      "count": 229
    },
    "priceCents": 3890,
    "keywords": [
      "обувь",
      "кроссовки",
      "обувь",
      "Мужской"
    ]
  },
  {
    "id": "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    "image": "images/products/men-navigator-sunglasses-brown.jpg",
    "name": "Мужские солнцезащитные очки-пилот-навигатор",
    "rating": {
      "stars": 3.5,
      "count": 42
    },
    "priceCents": 1690,
    "keywords": [
      "солнцезащитные очки",
      "очки",
      "аксессуары",
      "оттенки"
    ]
  },
  {
    "id": "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    "image": "images/products/non-stick-cooking-set-15-pieces.webp",
    "name": "Набор посуды с антипригарным покрытием, кастрюли, сковородки и посуда — 15 предметов",
    "rating": {
      "stars": 4.5,
      "count": 511
    },
    "priceCents": 6797,
    "keywords": [
      "набор для приготовления пищи",
      "кухня"
    ]
  },
  {
    "id": "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    "image": "images/products/vanity-mirror-silver.jpg",
    "name": "Косметическое зеркало с тяжелым основанием - хром",
    "rating": {
      "stars": 4.5,
      "count": 130
    },
    "priceCents": 1649,
    "keywords": [
      "ванная комната",
      "туалет",
      "зеркала",
      "дом"
    ]
  },
  {
    "id": "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    "image": "images/products/women-french-terry-fleece-jogger-camo.jpg",
    "name": "Женские флисовые спортивные штаны для джоггеров",
    "rating": {
      "stars": 4.5,
      "count": 248
    },
    "priceCents": 2400,
    "keywords": [
      "брюки",
      "спортивные штаны",
      "бег трусцой",
      "одежда",
      "Женский"
    ]
  },
  {
    "id": "d339adf3-e004-4c20-a120-40e8874c66cb",
    "image": "images/products/double-elongated-twist-french-wire-earrings.webp",
    "name": "Двойные овальные серьги из французской проволоки - золото",
    "rating": {
      "stars": 4.5,
      "count": 117
    },
    "priceCents": 2400,
    "keywords": [
      "аксессуары",
      "Женский"
    ]
  },
  {
    "id": "d37a651a-d501-483b-aae6-a9659b0757a0",
    "image": "images/products/round-airtight-food-storage-containers.jpg",
    "name": "Круглые герметичные контейнеры для хранения пищевых продуктов — 5 шт.",
    "rating": {
      "stars": 4,
      "count": 126
    },
    "priceCents": 2899,
    "keywords": [
      "коробки",
      "контейнеры для еды",
      "кухня"
    ]
  },
  {
    "id": "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    "image": "images/products/coffeemaker-with-glass-carafe-black.jpg",
    "name": "Кофеварка со стеклянным графином и многоразовым фильтром — 25 унций, черная",
    "rating": {
      "stars": 4.5,
      "count": 1211
    },
    "priceCents": 2250,
    "keywords": [
      "кофеварки",
      "кухня",
      "техника"
    ]
  },
  {
    "id": "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    "image": "images/products/blackout-curtains-black.jpg",
    "name": "Набор плотных штор 42 x 84 дюйма — черный, 2 панели",
    "rating": {
      "stars": 4.5,
      "count": 363
    },
    "priceCents": 3099,
    "keywords": [
      "спальня",
      "дом"
    ]
  },
  {
    "id": "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    "image": "images/products/cotton-bath-towels-teal.webp",
    "name": "Банные полотенца из 100% хлопка — 2 шт., светло-бирюзовый",
    "rating": {
      "stars": 4.5,
      "count": 93
    },
    "priceCents": 2110,
    "keywords": [
      "ванная комната",
      "дом",
      "полотенца"
    ]
  },
  {
    "id": "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    "image": "images/products/knit-athletic-sneakers-pink.webp",
    "name": "Водонепроницаемые Трикотажные Спортивные Кроссовки - Розовый",
    "rating": {
      "stars": 4,
      "count": 89
    },
    "priceCents": 3390,
    "keywords": [
      "обувь",
      "кроссовки",
      "обувь",
      "Женский"
    ]
  },
  {
    "id": "77a845b1-16ed-4eac-bdf9-5b591882113d",
    "image": "images/products/countertop-blender-64-oz.jpg",
    "name": "Настольный блендер — 64 унции, 1400 Вт",
    "rating": {
      "stars": 4,
      "count": 3
    },
    "priceCents": 10747,
    "keywords": [
      "пищевые блендеры",
      "кухня",
      "техника"
    ]
  },
  {
    "id": "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    "image": "images/products/floral-mixing-bowl-set.jpg",
    "name": "Набор мисок для смешивания, 10 предметов с крышками - Цветочный",
    "rating": {
      "stars": 5,
      "count": 679
    },
    "priceCents": 3899,
    "keywords": [
      "миски для смешивания",
      "выпечка",
      "посуда",
      "кухня"
    ]
  },
  {
    "id": "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    "image": "images/products/kitchen-paper-towels-30-pack.jpg",
    "name": "2-слойные кухонные бумажные полотенца — 30 шт.",
    "rating": {
      "stars": 4.5,
      "count": 1045
    },
    "priceCents": 5799,
    "keywords": [
      "кухня",
      "кухонные полотенца",
      "ткани"
    ]
  },
  {
    "id": "bc2847e9-5323-403f-b7cf-57fde044a955",
    "image": "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    "name": "Мужская флисовая толстовка с молнией во всю длину и капюшоном",
    "rating": {
      "stars": 4.5,
      "count": 3157
    },
    "priceCents": 2400,
    "keywords": [
      "свитера",
      "толстовки",
      "одежда",
      "Мужской"
    ]
  },
  {
    "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    "image": "images/products/athletic-cotton-socks-6-pairs.jpg",
    "name": "Черно-серые спортивные хлопковые носки — 6 пар",
    "rating": {
      "stars": 4.5,
      "count": 87
    },
    "priceCents": 1090,
    "keywords": [
      "носки",
      "спорт",
      "одежда"
    ]
  },
  {
    "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    "image": "images/products/intermediate-composite-basketball.jpg",
    "name": "Баскетбольный мяч среднего размера",
    "rating": {
      "stars": 4,
      "count": 127
    },
    "priceCents": 2095,
    "keywords": [
      "спорт",
      "баскетбольные мячи"
    ]
  },
  {
    "id": "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    "image": "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    "name": "Однотонная хлопковая футболка для взрослых — 2 шт.",
    "rating": {
      "stars": 4.5,
      "count": 56
    },
    "priceCents": 799,
    "keywords": [
      "футболки",
      "одежда",
      "Мужской"
    ],
    "type": "одежда",
    "sizeChartLink": "images/одежда-размер-диаграмма.png"
  },
  {
    "id": "54e0eccd-8f36-462b-b68a-8182611d9добавить",
    "image": "images/products/black-2-slot-toaster.jpg",
    "name": "Тостер на 2 слота - черный",
    "rating": {
      "stars": 5,
      "count": 2197
    },
    "priceCents": 1899,
    "keywords": [
      "тостер",
      "кухня",
      "техника"
    ]
  },
  {
    "id": "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    "image": "images/products/6-piece-white-dinner-plate-set.jpg",
    "name": "Набор белых обеденных тарелок из 6 предметов",
    "rating": {
      "stars": 4,
      "count": 37
    },
    "priceCents": 2067,
    "keywords": [
      "тарелки",
      "кухня",
      "столовая"
    ]
  },
  {
    "id": "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    "image": "images/products/6-piece-non-stick-baking-set.webp",
    "name": "Набор для выпечки в духовке из 6 предметов с антипригарным покрытием, набор для выпечки из углеродистой стали",
    "rating": {
      "stars": 4.5,
      "count": 175
    },
    "priceCents": 3499,
    "keywords": [
      "кухня",
      "посуда"
    ]
  },
  {
    "id": "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    "image": "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    "name": "Однотонная флисовая толстовка с капюшоном",
    "rating": {
      "stars": 4.5,
      "count": 317
    },
    "priceCents": 2400,
    "keywords": [
      "толстовки",
      "свитера",
      "одежда"
    ]
  },
  {
    "id": "77919bbe-0e56-475b-adde-4f24dfed3a04",
    "image": "images/products/luxury-tower-set-6-piece.jpg",
    "name": "Роскошный набор полотенец - графитовый серый",
    "rating": {
      "stars": 4.5,
      "count": 144
    },
    "priceCents": 3599,
    "keywords": [
      "ванная комната",
      "туалет",
      "туалет",
      "полотенца",
      "банные полотенца"
    ]
  },
  {
    "id": "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    "image": "images/products/liquid-laundry-detergent-plain.jpg",
    "name": "Жидкий стиральный порошок, 110 загрузок, 82,5 жидких унции",
    "rating": {
      "stars": 4.5,
      "count": 305
    },
    "priceCents": 2899,
    "keywords": [
      "ванная комната",
      "уборка"
    ]
  },
  {
    "id": "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    "image": "images/products/knit-athletic-sneakers-gray.jpg",
    "name": "Водонепроницаемые Трикотажные Спортивные Кроссовки - Серый",
    "rating": {
      "stars": 4,
      "count": 89
    },
    "priceCents": 3390,
    "keywords": [
      "обувь",
      "кроссовки",
      "обувь"
    ]
  },
  {
    "id": "5968897c-4d27-4872-89f6-5bcb052746d7",
    "image": "images/products/women-chiffon-beachwear-coverup-black.jpg",
    "name": "Женское шифоновое пляжное накидка - черный",
    "rating": {
      "stars": 4.5,
      "count": 235
    },
    "priceCents": 2070,
    "keywords": [
      "халат",
      "купальник",
      "плавание",
      "купание",
      "одежда"
    ],
    "type": "одежда",
    "sizeChartLink": "images/одежда-размер-диаграмма.png"
  }
].map((productDetails)=>{
  if(productDetails.type === 'одежда'){
    return new Clothing(productDetails)
  }else {
    return new Product(productDetails)
  }
})
*/

/*
const date = new Date();
console.log(date)
console.log(date.toLocaleDateString())
*/

/*
function logThis(){
  console.log(this) // undefined
}
logThis() // undefined
logThis.call('hello') // hello
logThis.call(2+2) // 4
*/

/*
const object = {
  method: () => {
    console.log(this) // undefined
  }
}
object.method() // undefined
object.method.call('object') // undefined
*/
