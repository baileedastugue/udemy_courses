function loginAdam() {
     let array = [];
     for (let i = 0; i < 10000; i++) {
          array.push(i);
     }
     console.log('Access granted to Adam');
}

function loginEve() {
     let array = [];
     for (let i = 0; i < 10000; i++) {
          array.push(i);
     }
     console.log('Access granted to Eve');
}

loginAdam();
loginEve();

const giveAccessTo = (name) => {
     return 'Access granted to ' + name;
};

function loginUser(user) {
     let array = [];
     for (let i = 0; i < 10000; i++) {
          array.push(i);
     }
     console.log(giveAccessTo(user));
}

loginUser('Jack');

function loginAdmin(admin) {
     let array = [];
     for (let i = 0; i < 50000; i++) {
          array.push(i);
     }
     console.log(giveAccessTo(admin));
}

function authenticate(verify) {
     let array = [];
     for (let i = 0; i < verify; i++) {
          array.push(i);
     }

     //  console.log(giveAccessTo(person.name));
}

function letPerson(person, fn) {
     if (person.level === 'admin') {
          // fn(50000);
          return fn(person);
     } else if (person.level === 'user') {
          // fn(1000);
          return fn(person);
     }
     //  console.log(giveAccessTo(person.name));
}

function sing(person) {
     console.log('lalala my name is ' + person.name);
}
letPerson({ level: 'user', name: 'Bailee' }, authenticate);
letPerson({ level: 'user', name: 'Sally' }, sing);

// ==========================================

const multiplyBy = (num1) => (num2) => {
     console.log(num1 * num2);
};

multiplyBy(4)(6);

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
multiplyByTwo(5);
multiplyByFive(5);
