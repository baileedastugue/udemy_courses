function multiply(a, b) {
     return a * b;
}

let multipleByTwo = multiply.bind(this, 2);
let multipleByTen = multiply.bind(this, 10);

console.log(multipleByTwo(4));
console.log(multipleByTen(4));
