const loc = [
  {
    location_key: [32, 22, 11],
    autoAssign: 1,
  },
  {
    location_key: [41, 42],
    autoAssign: 1,
  },
];

const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

// const result = _.map(loc, (locItem, index) => {
// return _.map(locItem["location_key"], (item) => {
//   return {
//     config_key: bulkConfig[index]["dataValues"]["config_key"],
//     location_key: item,
//     autoAssign: locItem.autoAssign,
//   };
// });
// });

const getConfigs = (locItem, index) => {
  return _.map(locItem["location_key"], (item) => {
    return {
      config_key: bulkConfig[index]["dataValues"]["config_key"],
      location_key: item,
      autoAssign: locItem.autoAssign,
    };
  });
};

const result = _.chain(loc).map(getConfigs).flatten().value();

console.log(result);
