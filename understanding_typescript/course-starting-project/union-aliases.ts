// function combine(input1: number | string, input2: number | string, resultType: string) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2;
//   }
//   else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }


type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultType: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
      return result = +input1 + +input2;
    }
    else {
      return result = input1.toString() + input2.toString();
    }
    // if (resultType === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
  }

const combinedAges = combine(30, 26, 'as-number');
const combinedNames = combine('Bailee', 'Jack', 'as-text');
const combinedStrings = combine('5', '7', 'as-number');

console.log(combinedAges);
console.log(combinedNames);

console.log(combinedStrings);
