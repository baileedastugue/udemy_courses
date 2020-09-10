const makeNuclearButton = () => {
     let timeWithoutDest = 0;
     const passTime = () => timeWithoutDest++;
     const totalPeaceTime = () => timeWithoutDest;
     const launch = () => {
          timeWithoutDest = -1;
          return 'boom';
     };
     setInterval(passTime, 1000);
     return {
          totalPeace: totalPeaceTime,
     };
};

const ohNo = makeNuclearButton();
console.log(ohNo.totalPeace());
// console.log(ohNo.launch());
