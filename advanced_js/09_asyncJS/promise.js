const promise = new Promise((resolve, reject) => {
     if (true) {
          resolve('Stuff worked');
     } else {
          reject('Error, it broken');
     }
});

// promise.then((result) => console.log(result));
// promise
//      .then((result) => {
//           throw Error;
//           return result + '!';
//      })
//      .then((result2) => {
//           console.log(result2);
//      })
//      .catch(() => console.log('error!'));

// promise
//      .then((result) => {
//           console.log(result + '!');
//      })
//      .then((result2) => {
//           console.log(result2 + '?');
//      })
//      .catch(() => console.log('error!'))
//      .then((result3) => console.log(result3 + '!'));

const promise2 = new Promise((resolve, reject) => {
     setTimeout(resolve, 100, 'Hi');
});

const promise3 = new Promise((resolve, reject) => {
     setTimeout(resolve, 1000, 'Hi Jack');
});

const promise4 = new Promise((resolve, reject) => {
     setTimeout(resolve, 3000, 'Hi Bailee');
});

Promise.all([promise2, promise3, promise4]).then((values) => {
     console.log(values);
});
 