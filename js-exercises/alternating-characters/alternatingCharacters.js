function numOfDeletetionsToAlternateString(string) {
  let countOfDeletions = 0;
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      countOfDeletions++;
    }
  }
  return countOfDeletions;
}

function alternatingCharacters(arr) {
  const result = arr.map((string) => numOfDeletetionsToAlternateString(string));
  return result;
}

export { alternatingCharacters };
