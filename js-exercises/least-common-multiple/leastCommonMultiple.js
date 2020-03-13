
function gcd(num1, num2) {
  if (num1 === 0) return num2;
  return gcd(num2 % num1, num1);
}

function leastCommonMultiple(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}

export {
  leastCommonMultiple,
};
