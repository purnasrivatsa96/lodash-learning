var basket = [];

function addProduct(product) {
  basket.push(product);
}
function increaseAmount(productId) {
  const updatedBasket = _.map(basket, (product) => {
    if (product.id === productId) {
      const amount = product.amount;
      return { ...product, amount: amount + 1 };
    } else {
      return product;
    }
  });
  return updatedBasket;
}

function removeById(productId) {
  return _.reject(basket, (product) => {
    return product.id === productId;
  });
}

function decreaseAmount(productId) {
  var updatedBasket = _.map(basket, (product) => {
    if (product.id === productId) {
      const amount = product.amount;
      return { ...product, amount: amount - 1 };
    } else {
      return product;
    }
  });
  updatedBasket = _.chain(updatedBasket)
    .filter((product) => {
      console.log(product);
      return product.amount > 0;
    })
    .value();
  return updatedBasket;
}

function getTotalProducts() {
  return _.reduce(
    basket,
    (amount, product) => {
      return amount + 1;
    },
    0
  );
}

function getTotalAmounts() {
  return _.reduce(
    basket,
    (amount, product) => {
      return amount + product.amount;
    },
    0
  );
}

function getTotalPrice(basket) {
  return _.reduce(
    basket,
    (sum, product) => {
      return sum + product.price;
    },
    0
  );
}

addProduct({ id: 1, name: "Milk", amount: 1, price: 2 });
console.log(basket);

addProduct({ id: 2, name: "Bread", amount: 2, price: 3 });
console.log(basket);

basket = increaseAmount(1);
console.log(basket);

basket = decreaseAmount(2);
console.log(basket);

basket = removeById(1);
console.log(basket);

console.log(getTotalProducts(basket));

console.log(getTotalAmounts(basket));

console.log(getTotalPrice(basket));
