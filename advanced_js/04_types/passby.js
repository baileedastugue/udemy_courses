var a = 5;
var b = a;

b++;
// a = 7;
console.log(a);
console.log(b);
// console.log(b + a);

let obj1 = {
     name: 'Jack',
     password: '123',
};

let obj2 = obj1;

obj2.password = 'easy';

// console.log(obj1);
// console.log(obj2);

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(6789);

var e = [].concat(d);
e.push(10);
// console.log(e);
// console.log(c);
// console.log(d);

let obj = {
     a: 'a',
     b: 'b',
     c: 'c',
};
let objClone = Object.assign({}, obj);
let objClone2 = { ...obj };

objClone.c = 'd';
// console.log(objClone);
// console.log(obj);
// console.log(objClone2);

let deepObj = {
     a: 'a',
     b: 'b',
     c: 'c',
     d: {
          deep: 'try and copy me',
     },
};

let deepObj2 = Object.assign({}, deepObj);
let superClone = JSON.parse(JSON.stringify(deepObj));
console.log(JSON.parse(JSON.stringify(deepObj)));
deepObj2.d.deep = 'Hello Bella';
// console.log(deepObj);
// console.log(deepObj2);
// console.log(superClone);
