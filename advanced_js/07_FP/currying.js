const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyByFive = curriedMultiply(5);
console.log(curriedMultiplyByFive(6));
