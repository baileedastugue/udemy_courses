const car1 = {
     brand: 'Porsche',
     getCarDescription: function (cost, year, color) {
          console.log(
               `This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`
          );
     },
};

const car2 = {
     brand: 'Lamborghini',
};

const car3 = {
     brand: 'Ford',
};

car1.getCarDescription(12, 2020, 'red');
car1.getCarDescription.call(car2, 12, 2021, 'purple');
car1.getCarDescription.apply(car3, [35000, 2017, 'yellow']);
