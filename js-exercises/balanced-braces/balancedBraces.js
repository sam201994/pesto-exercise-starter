const isOpeningbrace = (char) => char === '{' || char === '[' || char === '(';
const isClosingBrace = (char) => char === '}' || char === ']' || char === ')';


const balancedBraces = (str) => {
  const stack = [];
  const map = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  for (const char of str) {
    if (isOpeningbrace(char)) stack.push(char);
    else if (isClosingBrace(char)) {
      const last = stack.pop();
      if (map[last] !== char) return false;
    }
  }
  return stack.length === 0;
};


export {
  balancedBraces,
};
