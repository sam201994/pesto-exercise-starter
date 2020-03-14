function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function getPrimeSeriesTillN(num) {
  let i = 0;
  const primeSeries = [];
  while (i <= num) {
    if (isPrime(i)) primeSeries.push(i);
    i++;
  }
  return primeSeries;
}

function sumPrimes(num) {
  const primeSeries = getPrimeSeriesTillN(num);
  const totalSum = primeSeries.reduce((sum, currentValue) => sum + currentValue, 0);
  return totalSum;
}

export {
  sumPrimes,
};
