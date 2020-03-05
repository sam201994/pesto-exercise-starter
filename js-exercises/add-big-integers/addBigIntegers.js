function paddLeftAndMakeArraysEqual(padValue, ...arrays) {
  const maxLength = Math.max(...arrays.map((a => a.length)));
  const arrayContainer = [];
  for (const arr of arrays) {
    const lengthDiff = maxLength - arr.length;
    const diffArray = new Array(lengthDiff).fill(padValue);
    const equalArray = diffArray.concat(arr);
    arrayContainer.push(equalArray);
  }
  return arrayContainer;
}

const toDecimal = (el) => parseInt(el, 10);

function addNumericSgtrings(str1, str2) {
  const [firstNum, secondNum] = paddLeftAndMakeArraysEqual('0', str1.split(''), str2.split(''));
  const firstOperand = firstNum.map(toDecimal);
  const secondOperand = secondNum.map(toDecimal);

  const len = firstOperand.length;
  const carryArray = new Array(len).fill(0);
  const sumArray = new Array(len).fill(0);

  for (let i = len - 1; i > 0; i--) {
    const sum = firstOperand[i] + secondOperand[i] + carryArray[i];
    sumArray[i] = sum % 10;
    carryArray[i - 1] = Math.floor(sum / 10);
  }
  sumArray[0] = firstOperand[0] + secondOperand[0] + carryArray[0];
  return sumArray.join('');
}


function addBigIntegers(intString) {
  const arrayOfStringNumbers = intString.split('\n');
  const totalSum = arrayOfStringNumbers.reduce((sum, currentValue) => addNumericSgtrings(sum, currentValue), '0');
  return totalSum;
}


export { addBigIntegers };
