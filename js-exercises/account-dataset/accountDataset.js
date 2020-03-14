const path = require('path');
const fs = require('fs');

const fileContent = fs.readFileSync(
  path.join(__dirname, 'dataset.json'),
  'utf-8',
);

const { bankBalances } = JSON.parse(fileContent);

const hundredThousandairs = () => bankBalances.filter((account) => account.amount > 100000);

const datasetWithRoundedDollar = () => bankBalances.map((account) => ({
  amount: account.amount,
  state: account.state,
  rounded: Math.round(account.amount),
}));

const sumOfBankBalances = () => {
  const totalSum = bankBalances.reduce((sum, account) => sum + parseFloat(account.amount), 0);
  return parseFloat(totalSum.toFixed(2));
};

const sumOfInterests = () => {
  const filterByState = bankBalances.filter((account) => ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'].includes(account.state));
  const totalSumWithInterest = filterByState.reduce((sum, account) => {
    const amount = Math.round(parseFloat(account.amount));
    const amountAfterInterest = (0.189 * amount) + amount;
    return sum + amountAfterInterest;
  }, 0);

  return totalSumWithInterest;
};

function higherStateSums() {
  const stateToAmountMap = {};
  bankBalances.forEach((account) => {
    const amount = parseFloat(account.amount);
    stateToAmountMap[account.state] = stateToAmountMap[account.state]
      ? stateToAmountMap[account.state] + amount : amount;
  });
  const stateGreaterThan1000K = Object.keys(stateToAmountMap).filter((state) => stateToAmountMap[state] > 1000000);
  const aggSum = stateGreaterThan1000K.reduce((sum, state) => sum + stateToAmountMap[state], 0);
  return aggSum;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
