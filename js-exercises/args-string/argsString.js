const argsString = (message, args) => {
  const newString = [];
  let argsCurrentIndex = 0;
  for (let i = 0; i < message.length;) {
    const currentChar = message[i];
    if (i < message.length - 1) {
      const nextChar = message[i + 1];
      if (currentChar === '{' && nextChar === '}') {
        newString.push(args[argsCurrentIndex]);
        argsCurrentIndex += 1;
        i += 2;
      }
    } else {
      newString.push(currentChar);
      i += 1;
    }
  }

  return newString;
};

export { argsString };
