const accessorProperties = () => {
  this._number = null;
  Object.defineProperty(this, 'number', {
    get() {
      return (this._number >>> 0).toString(2);
    },
    set(number) {
      this._number = number;
    },
  });
  return this;
};

export {
  accessorProperties,
};
