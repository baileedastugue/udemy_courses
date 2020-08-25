// const userName = 'Bailee';
// userName = 'Dastugue'; // error

// let age = 25;
// age = 26;

//  if (age > 20) {
//    let isOld = true;
//  }

//  console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

const hobbies = ['Coding', 'Baking'];

const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies; 


const person = {
  firstName: 'Bailee',
  age: 26
};

const copiedPerson = {...person};
console.log(copiedPerson);

const {firstName: userName, age} = person;
console.log(userName);

// const add = (...numbers: number[]) => {
//   // let result = 0;
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue
//   }, 0)
// }

const add = (...numbers: [number, number, number]) => {
  //   // let result = 0;
    return numbers.reduce((curResult, curValue) => {
      return curResult + curValue
    }, 0)
  }

const example = add(5, 19, 8);
console.log(example);