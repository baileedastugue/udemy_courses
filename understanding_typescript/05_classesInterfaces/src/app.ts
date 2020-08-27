// interface Person {
//   name: string;
//   age: number; 

//   greet(phrase: string): void;
// }

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 26;

  constructor (n?: string) {
    if(n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

// let user1: Person;

let user1: Greetable;
// can't store anything in user1 that doesn't have the greet method

user1 = new Person('Bailee');
// user1.name = 'Max';
console.log(user1);

// user1 = {
//   name: 'Bailee',
//   age: 26,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name)
//   } 
// }

user1.greet('Yeehaw, I am');