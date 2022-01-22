const evenArray = [5, 8, 7, 12, 13, 17, 22];
function addEven(arr) {
  let counter = 0;
  for (evens of arr) {
    if (evens % 2 === 0) {
      counter += evens;
    }
  }
  console.log(counter);
}
addEven(evenArray);

//Or

function addUpEvens(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(addUpEvens(evenArray));

//OR

function filterJustEvens(arr) {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return sum;
}
console.log(filterJustEvens(evenArray));
