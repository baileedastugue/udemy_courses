const a = function () {
     console.log('a', this);
     const b = function () {
          console.log('b', this);
          const c = {
               hi: function () {
                    console.log('c', this);
               },
          };
          c.hi();
     };
     b();
};

a();

// const obj = {
//      name: 'Bailee',
//      sing() {
//           console.log('sing', this);
//           function anotherFunction() {
//                console.log('anotherFunction', this);
//           }
//           anotherFunction();
//      },
// };

// const obj = {
//      name: 'Bailee',
//      sing() {
//           console.log('sing', this);
//           var anotherFunction = () => {
//                console.log('anotherFunction', this);
//           };
//           anotherFunction();
//      },
// };

// const obj = {
//      name: 'Bailee',
//      sing() {
//           console.log('sing', this);
//           function anotherFunction() {
//                console.log('anotherFunction', this);
//           }
//           return anotherFunction.bind(this);
//      },
// };

// obj.sing()();

const obj = {
     name: 'Bailee',
     sing() {
          console.log('sing', this);
          var self = this;
          function anotherFunction() {
               console.log('anotherFunction', self);
          }
          anotherFunction();
     },
};

// obj.sing();
