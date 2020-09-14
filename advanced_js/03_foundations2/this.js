const obj = {
     name: 'Billy',
     //  sing: function () {
     //       console.log('lalala ' + this.this);
     //  },
     sing() {
          return 'lalala ' + this.name;
     },
     singAgain() {
          return this.sing() + '!';
     },
};

console.log(obj.sing());
console.log(obj.singAgain());

function vip() {
     console.log(this.name);
}

// vip();

const name = 'Sunny';

const obj1 = {
     name: 'Bella',
     vip: vip,
};

const obj2 = {
     name: 'Jack',
     vip: vip,
};

obj1.vip();
obj2.vip();
// console.log(name);
