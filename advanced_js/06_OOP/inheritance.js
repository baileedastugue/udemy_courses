// class Elf {
//      constructor(name, weapon) {
//           this.name = name;
//           this.weapon = weapon;
//      }
//      attack() {
//           return 'attack with ' + this.weapon;
//      }
// }

// const fiona = new Elf('Fiona', 'dragon');
// const ogre = { ...fiona };
// console.log(ogre);
// console.log(ogre.__proto__); // ogre does not have Elf as the base class, cannot do ogre.attack() bc lost the chain
// console.log(fiona.__proto__);

// ==================================

// base/super class
class Character {
     constructor(name, weapon) {
          this.name = name;
          this.weapon = weapon;
     }
     attack() {
          return 'attack with ' + this.weapon;
     }
}

// sub classing
class Elf extends Character {
     constructor(name, weapon, type) {
          // call the super class of elf
          super(name, weapon);
          this.type = type;
     }
}

class Ogre extends Character {
     constructor(name, weapon, color) {
          super(name, weapon);
          this.color = color;
     }
     areOnions() {
          return `${this.name} is like an onion, ogres are like onions`;
     }
}

// like doing:
// Ogre.prototype.makeFort = ....

const dobby = new Elf('Dobby', 'magic', 'house');
console.log(dobby.attack());
const shrek = new Ogre('Shrek', 'donkey', 'green');
console.log(shrek);
console.log(shrek.areOnions());

console.log(Ogre.prototype.isPrototypeOf(shrek));
console.log(Character.prototype.isPrototypeOf(Ogre.prototype));
console.log(dobby instanceof Elf);
console.log(dobby instanceof Character);
console.log(shrek instanceof Character);
