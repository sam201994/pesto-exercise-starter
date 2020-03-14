
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function getFibonacciSeriesLessTillN(n) {
  let i = 0;
  const fibSeries = [];
  while (true) {
    const fib = fibonacci(i);
    if (fib > n) break;
    fibSeries.push(fib);
    i++;
  }
  return fibSeries;
}
function sumFibs(num) {
  const febSeries = getFibonacciSeriesLessTillN(num);
  const oddNum = febSeries.filter((n) => n% 2 !== 0);
  const totalSum = oddNum.reduce((sum, currentValue) => sum + currentValue, 0);
  return totalSum;
}


export {
  sumFibs,
};
