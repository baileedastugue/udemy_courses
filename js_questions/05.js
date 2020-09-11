const getNumber = function (num1) {
     return function (num2) {
          console.log(num1 + num2);
     };
};

let ourNumber = getNumber(3);
ourNumber(2);

let thatNUmber = getNumber(6);
thatNUmber(8);

const globalVariable = 'global var';

function outterFunc(param1) {
     const variable1 = 'var one';

     function innerFunc(param2) {
          const variable2 = 'var two';

          console.log('globalVariable: ', globalVariable);
          console.log('variable1: ', variable1);
          console.log('variable2: ', variable2);
          console.log('param1: ', param1);
          console.log('param2: ', param2);
     }

     innerFunc('param one');
}

outterFunc('param two');
