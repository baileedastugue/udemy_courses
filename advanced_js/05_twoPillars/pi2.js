let dragon = {
     name: 'Bailee',
     fire: true,
     fight() {
          return 5;
     },
     sing() {
          if (this.fire) {
               return `I am ${this.name}, the friendly dragon`;
          }
     },
};

// console.log(dragon.sing());
// console.log(dragon.fight());

let lizard = {
     name: 'Jack',
     fight() {
          return 8;
     },
};

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

// lizard.__proto__ = dragon;
// console.log(lizard.fight());
// console.log(dragon.isPrototypeOf(lizard));

lizard.__proto__ = dragon;
for (let prop in lizard) {
     if (lizard.hasOwnProperty(prop)) {
          console.log(prop);
     }
}
