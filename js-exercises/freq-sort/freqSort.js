const compose = (...fns) => x => fns.reduce((v, f) => f(v), x);

const countBy = (arr) => arr.reduce((freqMap, elem) => {
  const newFreqMap = { ...freqMap };
  newFreqMap[elem] = (newFreqMap[elem] || 0) + 1;
  return newFreqMap;
}, {});

const toEntries = Object.entries;

const sortBy = (array) => array.sort((a, b) => {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  return 0;
});

const map = (array) => array.map(el => el[0]);

const freqSort = (array) => compose(
  countBy,
  toEntries,
  sortBy,
  map,
)(array);

export {
  freqSort,
};
