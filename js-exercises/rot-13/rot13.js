function shiftAlphabetBy(letter, shift) {
  const asciiCode = letter.codePointAt(0);
  const isUpperCase = asciiCode >= 65 && asciiCode <= 90;
  const isLowerCase = asciiCode >= 97 && asciiCode <= 122;

  if (isLowerCase) {
    const shiftedLetter = ((asciiCode - 97) + shift) % 26;
    return String.fromCodePoint(shiftedLetter + 97);
  }

  if (isUpperCase) {
    const shiftedLetter = ((asciiCode - 65) + shift) % 26;
    return String.fromCodePoint(shiftedLetter + 65);
  }
  return letter;
}

function rot13(str) {
  const decodedMessage = [];
  for (const letter of str) {
    decodedMessage.push(shiftAlphabetBy(letter, 13));
  }
  return decodedMessage.join('');
}


export {
  rot13,
};
