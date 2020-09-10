function a() {
     let grandpa = 'grandpa';
     return function b() {
          let father = 'father';
          return function c() {
               let son = 'son';
               console.log(`${grandpa} > ${father} > ${son}`);
          };
     };
}

const one = a();

const boo = (str) => (name) => (name2) =>
     console.log(`${str} ${name} ${name2}`);

boo('apple')('banana')('orange');

const booString = boo('hi');
// 5 years
const booStringName = booString();

function callMe() {
     setTimeout(function () {
          console.log(call);
     }, 0);
     const call = 'Hi I am here';
}

callMe();
