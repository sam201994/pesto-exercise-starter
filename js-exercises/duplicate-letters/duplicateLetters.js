function createCharFrequencyMap(string) {
  const charFrequencyMap = {};
  for (const char of string) {
    charFrequencyMap[char] = charFrequencyMap[char] ? charFrequencyMap[char] + 1 : 1;
  }
  return charFrequencyMap;
}

function getKeyWithMaxFrequency(object) {
  const maxKey = Object.keys(object).reduce((a, b) => (object[a] > object[b] ? a : b));
  return maxKey;
}

function duplicateLetters(string) {
  const charFrequencyMap = createCharFrequencyMap(string);

  const maxKey = getKeyWithMaxFrequency(charFrequencyMap);
  if (charFrequencyMap[maxKey] > 1) return charFrequencyMap[maxKey];
  return false;
}

export {
  duplicateLetters,
};
