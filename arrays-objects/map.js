var newArr = [1, 2, 3].map((item) => {
  return item;
});

console.log(newArr);

var newArrLodash = _.map(
  [
    { id: 1, name: "John" },
    { id: 2, name: "Jack" },
  ],
  (item) => {
    return item.id;
  }
);

var users = {
  1: {
    name: "John",
  },
  2: { name: "Jack" },
};

console.log(newArrLodash);

var userNames = _.map(users, (user) => {
  return user.name;
});

console.log(userNames);

users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jack" },
];

var ids = _.map(users, "id");
console.log(ids);
