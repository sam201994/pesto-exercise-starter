function pathSatisfies(condition, path, object) {
  let value = object;
  for (const i of path) {
    value = value[i];
  }
  return condition(value);
}

export {
  pathSatisfies,
};
