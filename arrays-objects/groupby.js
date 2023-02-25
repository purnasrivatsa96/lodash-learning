const users = [
  { id: 1, name: "John", isActive: true, likes: 110 },
  { id: 2, name: "Jack", isActive: true, likes: 90 },
  { id: 3, name: "Mike", isActive: false, likes: 200 },
];

const groupedUsers = _.groupBy(users, (user) => {
  return user.likes > 100;
});

console.log(groupedUsers);
