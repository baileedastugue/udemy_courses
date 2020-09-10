// memory efficient

function heavyDuty(index) {
     const bigArray = new Array(7000).fill(':-)');
     console.log('created');
     return bigArray[index];
}

console.log(heavyDuty(688));
console.log(heavyDuty(688));
console.log(heavyDuty(688));
console.log('hi');
const getHeavyDuty = heavyDutyTwo();
console.log(getHeavyDuty(688));
console.log(getHeavyDuty(700));
console.log(getHeavyDuty(800));

function heavyDutyTwo() {
     const bigArray = new Array(7000).fill(':-)');
     console.log('created again');
     return function (index) {
          return bigArray[index];
     };
}
