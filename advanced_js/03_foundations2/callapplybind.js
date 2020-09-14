const wizard = {
     name: 'Albus',
     health: 100,
     heal() {
          console.log((this.health = 100));
     },
};

const witch = {
     name: 'Minerva',
     health: 90,
};

console.log('1', witch);
// wizard.heal.call(witch);

const healWitch = wizard.heal.bind(witch);
healWitch();
console.log('2', witch);

const array = [1, 2, 3];
function getMaxNumber(arr) {
     console.log(Math.max.apply(null, arr));
}

getMaxNumber(array);
