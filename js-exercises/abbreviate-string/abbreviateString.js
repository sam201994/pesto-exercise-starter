
function isString(string) {
  return (typeof string === 'string' || string instanceof String);
}

function abbreviateString(str) {
  if (!isString(str)) throw new Error(`Expected type string, received ${typeof str}`);
  const stringArr = str.split(' ');
  const firstWord = stringArr[0];
  const lastWord = stringArr[stringArr.length - 1];
  return `${firstWord} ${lastWord[0].toUpperCase()}.`;
}

export { abbreviateString };
