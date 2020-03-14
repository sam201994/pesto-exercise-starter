
function aperture(n, list) {
  const arrayContainer = [];
  for (let i = 0; i < list.length; i++) {
    const tuple = list.slice(i, i + n);
    if (tuple.length === n) {
      arrayContainer.push(tuple);
    }
  }

  return arrayContainer;
}

export { aperture };
