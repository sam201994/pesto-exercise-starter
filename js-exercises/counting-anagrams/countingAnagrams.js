const countingAnagrams = str => {
  const words = str.split(' ');
  const obj = {};
  for (const word of words) {
    if (word.length > 1) {
      const w = word.split('').sort().join('');
      obj[w] = (obj[w] || 0) + 1;
    }
  }
  const total = Object.values(obj).reduce((acc, value) => (value > 1 ? acc + 1 : acc), 0);
  return total;
};

export { countingAnagrams };
