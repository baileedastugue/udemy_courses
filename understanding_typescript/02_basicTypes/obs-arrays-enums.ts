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


enum Role {ADMIN = 5, READ_ONLY, AUTHOR};
// r_o = 6, a = 7

const person = {
  name: 'Bailee',
  age: 26,
  hobbies: ['Coding', 'Baking'],
  role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;


if (person.role === Role.AUTHOR) {
  console.log('is author');
 }

let favoriteHobbies: any[];
favoriteHobbies = ['Sports'];

// console.log(person.nickname);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // we get an error!!!
  // oh man I love this
}