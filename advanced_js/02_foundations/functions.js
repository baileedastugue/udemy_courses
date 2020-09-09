function marry(person1, person2) {
     //  console.log(arguments);
     console.log(Array.from(arguments));
     console.log(`${person1} is now married to ${person2}`);
}

function marry2(...args) {
     console.log(args);
     console.log(`${args[0]} is now married to ${args[1]}`);
}

marry('Tim', 'Tina');
marry2('Jack', 'Bailee');

function two() {
     var isValid;
     console.log(isValid);
}

function one() {
     var isValid = true;
     console.log(isValid);
     two();
}

var isValid = false;
console.log(isVvalid);
one();

// two() -- undefined
// one() -- true
// global() -- false
