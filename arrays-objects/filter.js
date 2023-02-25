const newArray = _.filter([1, 2, 3, 4, 5], (item) => {
  return item < 3;
});

console.log(newArray);

const users1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jack" },
];

const users2 = {
  1: { id: 1, name: "John" },
  2: { id: 2, name: "Jack" },
};

const newUsers1 = _.filter(users1, (item) => {
  return item.name === "John";
});

const newUsers2 = _.filter(users2, (item) => {
  return item.name === "John";
});

const newUsers3 = _.filter(users2, { name: "John" });

console.log(newUsers1);

console.log(newUsers2);
console.log(newUsers3);
