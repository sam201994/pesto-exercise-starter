const isArray = (arr) => Array.isArray(arr);

const isObject = (obj) => {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
};

const copyObject = objToCopy => {
  const newObject = {};
  for (const key in objToCopy) {
    const value = objToCopy[key];
    if (isArray(value)) {
      newObject[key] = copyArray(value);
    } else if (isObject(value)) {
      newObject[key] = copyObject(value);
    } else {
      newObject[key] = value;
    }
  }
  return newObject;
};


const copyArray = (arr) => {
  const newArr = [];

  arr.forEach((item) => {
    if (isArray(item)) {
      newArr.push(copyArray(item));
    } else if (isObject(item)) {
      newArr.push(copyObject(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
};

const deepCopyObject = (value) => {
  if (isArray(value)) {
    return copyArray(value);
  } if (isObject(value)) {
    return copyObject(value);
  }
  return value;
};


export { deepCopyObject };
