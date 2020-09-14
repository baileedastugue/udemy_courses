const compose = (f, g) => (data) => f(g(data));
// data = -50

const multiplyBy3 = (n) => n * 3;
const makePos = (n) => Math.abs(n);

const mult3AndAbs = compose(multiplyBy3, makePos);

console.log(mult3AndAbs(-50));
// compose goes R --> L
// pipe goes L --> R
const pipe = (f, g) => (data) => g(f(data));
