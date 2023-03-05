const numbers1 = [
  [1, 2],
  [3, [4, 5]],
];

const numbers2 = [[[6, 7]]];

function flattenDeep(numbers1, numbers2) {
  // console.log(...args);
  const result = _.flattenDeep(numbers1, numbers2);
}

const result = flattenDeep(numbers1, numbers2);

console.log(result);
