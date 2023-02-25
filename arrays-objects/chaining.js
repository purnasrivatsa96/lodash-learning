const users = [
  { id: 1, name: "John", isActive: true, age: 20 },
  { id: 2, name: "Jack", isActive: true, age: 30 },
  { id: 3, name: "Mike", isActive: false, age: 24 },
];

//get youngest active user

const youngestUser = _.chain(users)
  .filter("isActive")
  .orderBy(["age"])
  .map("id")
  .value();

console.log(youngestUser);
