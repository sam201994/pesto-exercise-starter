const sumEvenArgs = (...args) => {
  const EvenNumArr = args.filter((value) => value % 2 === 0);
  const arrSum = EvenNumArr.reduce((sum, cuurentValue) => sum + cuurentValue, 0);
  return arrSum;
};

export { sumEvenArgs };
