var person = {
     name: 'Bailee',
     numArms: 2,
     sing() {
          return `la la la you really don't want to hear ${this.name} sing`;
     },
};

console.log(person.numArms);
console.log(person.sing());

var house = {
     price: 100000,
     squareFeet: 2000,
     owner: 'Taylor',
     getPricePerSquareFoot: function () {
          return this.price / this.squareFeet;
     },
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());
