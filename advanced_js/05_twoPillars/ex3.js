const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
     (function (closureI) {
          setTimeout(() => {
               console.log('I am at index ' + closureI);
          }, 3000);
     })(i);
     // pass the immediately invoked function the parameter i
}

(function () {
     console.log('hello');
})();
