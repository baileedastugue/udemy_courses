// const elf = {
//      name: 'Orwell',
//      weapon: 'bow',
//      attack() {
//           return 'attack with ' + elf.weapon;
//      },
// };

// elf.attack();

// const elf2 = {
//      name: 'Sally',
//      weapon: 'bow',
//      attack() {
//           return 'attack with ' + elf.weapon;
//      },
// };

// ========================================

// Object.create()

// const elfFunctionStore = {
//      attack() {
//           return 'attack with ' + this.weapon;
//      },
// };

// function createElf(name, weapon) {
//      let newElf = Object.create(elfFunctionStore);
//      newElf.name = name;
//      newElf.weapon = weapon;
//      return newElf;
// }

// const peter = createElf('Peter', 'sword');
// console.log(peter.attack());
// const jack = createElf('Jack', 'cat');
// console.log(jack.attack());

// ========================================

// constructor functions

// function Elf(name, weapon) {
//      this.name = name;
//      this.weapon = weapon;
//      //  this.attack = () => {
//      //       return 'attack with ' + this.weapon;
//      //  };
// }

// Elf.prototype.attack = function () {
//      return 'attack with ' + this.weapon;
// };

// const peter = new Elf('Peter', 'sword');
// console.log(peter.name);
// const jack = new Elf('Jack', 'cat');
// console.log(jack.attack());

// const Elf1 = new Function(
//      'name',
//      'weapon',
//      `this.name = name;
//       this.weapon = weapon;`
// );

// const sarah = new Elf1('Sarah', 'stoned');
// console.log(sarah);

// ========================================

// ES6 class
class Elf {
     constructor(name, weapon) {
          this.name = name;
          this.weapon = weapon;
     }
     attack() {
          return 'attack with ' + this.weapon;
     }
}

const bailee = new Elf('bailee', 'brain');
console.log(bailee instanceof Elf);
console.log(bailee.attack());
