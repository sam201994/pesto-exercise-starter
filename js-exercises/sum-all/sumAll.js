function getSumBetweenTwoNumbers(max, min) {
  return (((max - min) + 1) * (min + max)) / 2;
}

function sumAll(arr) {
  if (arr.length !== 2) throw Error(`Expected array length 2, received ${arr.length}`);
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return getSumBetweenTwoNumbers(max, min);
}


export {
  sumAll,
};
