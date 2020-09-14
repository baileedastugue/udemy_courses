const obj = { name: 'Bailee' };
function clone(obj) {
     return { ...obj }; // this is pure
}

function updateName(obj) {
     const obj2 = clone(obj);
     obj2.name = 'Bunny';
     return obj2;
}

const updatedObj = updateName(obj);
console.log(updatedObj);
console.log(updateName(obj));
console.log(obj);
