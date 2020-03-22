function minima(k, arr) {
  const sortedArray = arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return sortedArray.slice(0, k);
}
export { minima };
