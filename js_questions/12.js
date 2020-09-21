function getProduct(num1) {
     return function (num2) {
          return num1 * num2;
     };
}

console.log(getProduct(2)(8));

// function getTravelTime(distance, speed) {
//      return distance / speed;
// }

function getTravelTime(distance) {
     return function (speed) {
          return distance / speed;
     };
}

const fromNyToBoston = getTravelTime(400);

console.log(fromNyToBoston(5));
