const obj = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const obj2 = {
  x: 420,
};

const unboundGetX = obj.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(obj2);
console.log(boundGetX());