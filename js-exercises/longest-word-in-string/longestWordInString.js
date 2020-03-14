const longestWordInString = (string) => {
  const arrOfWords = string.split(' ');
  const mapWordToWordLength = arrOfWords.map((word) => word.length);
  return Math.max(...mapWordToWordLength);
};

export { longestWordInString };
