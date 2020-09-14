const multiply = (a, b, c) => a * b * c;

const curriedMultiply = (a) => (b) => (c) => a * b * c;

const partialMultiplyBy5 = multiply.bind(null, 5);
// this = null, 5 is passed into parameter a of multiply

console.log(curriedMultiply(3)(4)(10));
console.log(partialMultiplyBy5(3, 4));
