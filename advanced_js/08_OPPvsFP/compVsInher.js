function getAttack(character) {
     return Object.assign({}, character, { attack: () => {} });
}

function Elf(name, weapon, type) {
     let elf = {
          name,
          weapon,
          type,
     };
     return getAttack(elf);
}
