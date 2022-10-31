let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
let remArray = [];
let len = array.length;
for (let index = 0; index < len; index++) {
  if (remArray.indexOf(array[index]) === -1) {
    remArray.push(array[index]);
  }
}
console.log(remArray);