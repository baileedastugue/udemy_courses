// no side effects
// input --> output

const array = [1, 2, 3];
// function mutateArr(arr) {
//      arr.pop();
// }

// function mutateArr2(arr) {
//      for (let i of arr) {
//        arr.push(1);
//      }
// }

// mutateArr(array);
// this is a side effect
// console.log(array);

function removeLastItem(arr) {
     const newArray = [].concat(arr);
     newArray.pop();
     return newArray;
}

function multiplyBy2(arr) {
     return arr.map((item) => item * 2);
}

console.log(array);
console.log(removeLastItem(array));
console.log(multiplyBy2(array));
