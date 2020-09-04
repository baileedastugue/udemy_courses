const list = new Array(60).join('1.1').split('.');

function removeItemsFromList() {
     var item = list.pop();
     if (item) {
          setTimeout(removeItemsFromList, 0);
     } else {
          console.log(`list is empty! ${list}`);
     }
}
removeItemsFromList();

// console.log(list);
