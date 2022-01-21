let temp = 8.5;
function convertCtoF(cel) {
  const far = cel * 1.8 + 32;
  return far;
}

const fahrenheit = convertCtoF(temp);
console.log(
  `${temp} degrees celsius is equivalent to ${fahrenheit} degrees fahrenheit`
);
