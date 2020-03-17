function bizarreStringIncrementer(string) {
  const numberPattern = /(\d*$)/;
  return string.replace(numberPattern, (match) => {
    const { length } = match;
    const incrementedValue = Number(match) + 1;
    return incrementedValue.toString().padStart(length, '0');
  });
}

export {
  bizarreStringIncrementer,
};
