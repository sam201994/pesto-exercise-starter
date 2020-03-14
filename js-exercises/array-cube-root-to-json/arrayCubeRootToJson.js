function isNumeric(s) {
  if (typeof s === 'number') return true;
  return !isNaN(s - parseFloat(s));
}

function isNumberArray(arr) {
  if (!Array.isArray(arr)) throw Error(`Expected an array of numbers, received ${typeof arr}`);
  const isValidInput = arr.every(isNumeric);
  if (!isValidInput) throw Error(`Expected an array of valid numbers in numeric or string form, received ${arr}`);
  return true;
}

const toNumber = (el) => parseFloat(el);

const arrayCubeRootToJson = (arr) => {
  if (!isNumberArray(arr)) return;
  const numberArr = arr.map(toNumber);
  const numToCuberootMap = {};
  for (const num of numberArr) {
    numToCuberootMap[num] = Math.cbrt(num);
  }
  return numToCuberootMap;
};

export { arrayCubeRootToJson };
