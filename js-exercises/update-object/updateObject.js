
function updateArray(index, value, arr) {
  let newIndex = index;
  if (index < 0) newIndex = arr.length + index;
  if (newIndex >= arr.length) throw Error('Index out of bounds');
  const newArr = [...arr];
  newArr[newIndex] = value;
  return newArr;
}


export {
  updateArray,
};
