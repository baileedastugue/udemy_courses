// HOF

const hof = () => () => 5;
console.log(hof()());

const hof2 = (fn) => fn(5);

console.log(
     hof2(function a(x) {
          return x;
     })
);

// closure

// const closure = function () {
//      let count = 0;
//      return function increment() {
//           count++;
//           return count;
//      };
// };

// console.log(closure()() );

const closure = function () {
     let count = 55;
     return function getCount() {
          return count;
     };
};

console.log(closure()());
