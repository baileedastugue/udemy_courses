function myFunc() {
     let count = 0;
     return function () {
          count++;
          return count;
     };
}

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log(instanceOne());
console.log(instanceOne());
console.log(instanceOne());
console.log(instanceOne());

console.log(instanceTwo());
console.log(instanceTwo());
console.log(instanceTwo());
console.log(instanceTwo());
console.log(instanceTwo());
console.log(instanceTwo());
