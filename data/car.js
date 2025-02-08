class Car {
  brand;
  model;
  speed = 0;
  isTruckOpen = false;

  constructor(details){
    this.brand = details.brand;
    this.model = details.model;
  }

  displayInfo(){
    console.log(`Марка: ${this.brand} \nМодель: ${this.model} \nСкорость: ${this.speed} км/ч \nСостояние багажника: ${this.isTruckOpen}`)
  }
  go(){
    if(this.isTruckOpen === true){
      console.error('Машина не может ехать!, закройте багажник')
    } else{
      this.speed += 5
    }
    if(this.speed >= 200){
      this.speed = 200
    }
  }
  break(){
    this.speed -= 5
    if(this.speed <= 0){
      this.speed = 0
    }
  }
  truckOpen(){
    if(this.speed > 0){
      console.error('Машина находится в движении!, невозможно открыть багажник')
    } else{
      this.isTruckOpen = true
    }
  }
  truckClose(){
    this.isTruckOpen = false;
  }
}

const car1 = new Car({
  brand: 'Tesla',
  model: 'model 2',
})

const car = [
  {
    brand: 'Audi',
    model: 'Q3',
  },
  {
    brand: 'Tesla',
    model: 'model 2',
  },
  {
    brand: 'hundai',
    model: 'solaris',
  },
].map((car)=>{
  return new Car(car)
})


console.log(car)


car[1].truckClose()
car[1].go()
car[1].displayInfo()