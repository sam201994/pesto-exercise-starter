
function lastIndexOf(item, arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === item) return i;
  }
  return -1;
}

export {
  lastIndexOf,
};
