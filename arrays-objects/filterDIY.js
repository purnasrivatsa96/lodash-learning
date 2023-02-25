const products = [
  {
    id: 1,
    name: "milk",
    price: "1$",
  },
  {
    id: 2,
    name: "bread",
    price: "2$",
  },
  {
    id: 3,
    name: "meat",
    price: "3$",
  },
];

function searchProduct(products, searchedValue) {
  return _.filter(products, (product) => {
    return _.includes(product.name, searchedValue);
  });
}

const searchResult = searchProduct(products, "ad");
console.log(searchResult);
