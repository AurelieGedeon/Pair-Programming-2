let usd = 98;
function convertUsdToGourdes(usd) {
  const gourdes = usd * 102.31;
  return gourdes.toFixed(2);
}
const haitianGourdes = convertUsdToGourdes(usd);
console.log(`${usd} USDs is equivalent to ${haitianGourdes} Haitian gourdes.`);
