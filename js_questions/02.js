const tripleAdd = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
tripleAdd(10)(20)(30);

const quadAdd = (num1) => (num2) => (num3, num4) =>
     console.log(num1 + num2 + num3 + num4);
quadAdd(10)(20)(30, 40);

const tripleAdd1 = (num1, num2, num3) => {
     return num1 + num2 + num3;
};
