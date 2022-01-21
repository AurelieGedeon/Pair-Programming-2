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
