const flatList = [
  { id: 1, name: "lvl 1 item 1", parentID: null },
  { id: 2, name: "lvl 1 item 2", parentID: null },
  { id: 3, name: "lvl 2 item 3", parentID: 1 },
  { id: 4, name: "lvl 3 item 4", parentID: 3 },
  { id: 5, name: "lvl 2 item 5", parentID: 2 },
];

// [
//   { id: 1, children: [{ id: 3, children: [{ id: 4, children: [] }] }] },
//   { id: 2, children: [{ id: 5, children: [] }] },
// ];

function getRootElements(flatList) {
  const rootElements = _.filter(flatList, (flatListElement) => {
    return flatListElement.parentID === null;
  });
  return rootElements;
}

const getChildren = (element) => {
  console.log(element);
  console.log(flatList);
  const children = _.filter(flatList, (flatListElement) => {
    return flatListElement.parentID === element.id;
  });
  var nestedChildren = [];
  if (!_.isEmpty(children)) {
    nestedChildren = _.map(children, getChildren);
  }
  return _.assign({}, element, { children: nestedChildren });
};

function nestedList(flatList) {
  return _.chain(flatList)
    .filter((item) => {
      return item.parentID === null;
    })
    .map(getChildren)
    .value();
}
const result = nestedList(flatList);
console.log(result);
