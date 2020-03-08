function getUpdatedInventory(curInv, newInv) {
  const inv = {};
  curInv.forEach((item) => {
    const tag = item[1];
    const quantity = item[0];
    inv[tag] = inv[tag] ? inv[tag] + quantity : quantity;
  });

  newInv.forEach((item) => {
    const tag = item[1];
    const quantity = item[0];
    inv[tag] = inv[tag] ? inv[tag] + quantity : quantity;
  });
  const totalInv = [];
  for (const key in inv) {
    totalInv.push([inv[key], key]);
  }
  return totalInv;
}

function updateInventory(curInv, newInv) {
  const updatedNewInventory = getUpdatedInventory(curInv, newInv);
  return updatedNewInventory.sort((itemA, itemB) => {
    const a = itemA[1];
    const b = itemB[1];
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  });
}


export {
  updateInventory,
};
