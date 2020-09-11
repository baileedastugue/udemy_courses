const callFunc = () => {
     console.log('This function was invoked before it was declared!');
};

callFunc();

var bananas = 'nana';
console.log(bananas);

// =====================================

// tab 1

console.log(color);

var color = 'blue';

console.log(color);

//tab 2

var color;

console.log(color);

color = 'blue';

console.log(color);

// tab 3

console.log(getProduct(2, 3));

var getProduct = function (num1, num2) {
     return num1 * num2;
};

console.log(getProduct(2, 3));

// tab 4

console.log(getProduct(2, 3));

function getProduct(num1, num2) {
     return num1 * num2;
}

// tab 5

var globalVar = 'global';

(function () {
     var name = 'Jen';

     var getAge = function () {
          return '30';
     };

     function getState() {
          return 'Delaware';
     }
})();

// =====================================

// tab 1

function getTotal() {
     console.log(multiplier);
     console.log(total);

     let total = 0;

     for (var i = 0; i < 10; i++) {
          let valueToAdd = i;
          var multiplier = 2;
          total += valueToAdd * multiplier;
     }

     return total;
}

getTotal();

// tab 2

function getTotal() {
     let total;
     var multiplier;

     total = 0;

     for (var i = 0; i < 10; i++) {
          let valueToAdd;

          valueToAdd = i;
          multiplier = 2;
          total += valueToAdd * multiplier;
     }

     return total;
}

getTotal();
