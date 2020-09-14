var b = {
     name: 'jay',
     say() {
          console.log(this);
     },
};

var c = {
     name: 'jay',
     say() {
          return function () {
               console.log(this);
          };
     },
};

var d = {
     name: 'jay',
     say() {
          return () => console.log(this);
     },
};

// b --> b
// b.say();

// c --> window?
// c.say()();

// d --> d
// d.say()();

const character = {
     name: 'Simon',
     getCharacter() {
          return this.name;
     },
};

const giveMeTheChar = character.getCharacter.bind(character);
// console.log(character.getCharacter());
console.log('?', giveMeTheChar());
