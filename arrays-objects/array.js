// console.log("foo");

// var native = [1, 2].forEach((item) => {
//   console.log(item);
// });

// var lodash = _.each([1, 2], (item) => {
//   console.log(item);
// });

// console.log(native, lodash);

var items = {
  1: { name: "milk" },
  2: { name: "Bread" },
};

var arr = [];
_.each(items, (item, index) => {
  console.log(item, index);
  arr.push(item);
});

console.log(arr);
