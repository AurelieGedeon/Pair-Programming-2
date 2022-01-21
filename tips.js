const tips = [5, 8, 13, 2, 14, 27, 9, 18];
function calcTips(arr) {
  let sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum;
}

console.log(calcTips(tips));
