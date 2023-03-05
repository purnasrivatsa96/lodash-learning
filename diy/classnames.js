const isAuthor = false;
const isInFocus = true;

// _.mixin({ getUsedClassname: getUsedClassname });

function getUsedClassname(value, key) {
  return value ? key : undefined;
}

function classNames(conditions) {
  return _.chain(conditions).map(getUsedClassname).compact().join(" ").value();
}

const liClass = classNames({
  item: true,
  active: isAuthor,
  "item-highlighted": isInFocus,
});

console.log(liClass);
