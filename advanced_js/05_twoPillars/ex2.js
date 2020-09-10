let view;
function initialize() {
     let called = 0;
     return function () {
          if (called > 0) {
               return;
          } else {
               called++;
               view = 'mountain';
               console.log('view has been set');
          }
     };
}

const started = initialize();
started();
