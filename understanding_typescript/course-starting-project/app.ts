// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Bailee',
//   age: 26,
//   hobbies: ['Coding', 'Baking'],
//   role: [2, 'author']
// };

const person = {
  name: 'Bailee',
  age: 26,
  hobbies: ['Coding', 'Baking'],
  role: 2
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteHobbies: any[];
favoriteHobbies = ['Sports'];

// console.log(person.nickname);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // we get an error!!!
  // oh man I love this
}