function isTriangle(side1, side2, side3) {
  return (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1);
}
export {
  isTriangle,
};
