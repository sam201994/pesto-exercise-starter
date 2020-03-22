
class BetterStringLib {
  constructor(str) {
    this.str = str;
  }

  reverse() {
    return Array.from(this.str).reverse().join('');
  }

  equal(str) {
    return this.str === str;
  }
}

export {
  BetterStringLib,
};
