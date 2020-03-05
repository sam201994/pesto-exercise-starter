const rotatedString = (str1, str2) => {
  if (str1 === str2) return false;
  const temp = str1 + str2;
  return temp.includes(str2);
};

export { rotatedString };
