let human = {
     mortal: true,
};

let plato = Object.create(human);
plato.ago = 100;
console.log(plato.mortal);
console.log(human.isPrototypeOf(plato));
console.log(plato);
