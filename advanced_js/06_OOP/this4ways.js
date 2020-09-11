// new binding this
function Person(name, age) {
     this.name = name;
     this.age = age;
}

const person1 = new Person('Bellatrix', 10);

// implicit binding
const person2 = {
     name: 'Bella',
     age: 10,
     hi() {
          console.log('meow ' + this.name);
     },
};

// explicit binding - using bind, call, or apply
const person3 = {
     name: 'Bella',
     age: 10,
     hi: function () {
          console.log('meow ' + this.setTimeout);
     }.bind(window),
};

// arrow functions - lexical scoping
const person4 = {
     name: 'Bella',
     age: 10,
     hi: function () {
          var inner = () => {
               console.log('meow ' + this.name);
          };
          return inner();
     },
};
