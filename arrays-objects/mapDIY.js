var users = [
  {
    id: 1,
    first_name: "John",
    status: "active",
  },
  { id: 2, first_name: "Mike", status: "inactive" },
];

console.log(users);

// var users = [
//   {
//     id: 1,
//     firstName: "John",
//     isActive: true,
//   },
//   { id: 2, firstName: "Mike", status: false },
// ];

function normalizeUsers(users) {
  return _.map(users, function (user) {
    return {
      id: user.id,
      firstName: user.first_name,
      isActive: user.status === "active" ? true : false,
    };
  });
}

console.log(normalizeUsers(users));
