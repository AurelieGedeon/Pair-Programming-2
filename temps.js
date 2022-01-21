let tempC = 8.5;
function convertCtoF(cel) {
  const far = cel * 1.8 + 32;
  return far;
}

const fahrenheit = convertCtoF(tempC);
console.log(
  `${tempC} degrees celsius is equivalent to ${fahrenheit} degrees fahrenheit`
);
//OR
//console.log(`${tempC}ºC is equivalent to ${convertCtoF(tempC)}ºF`);
