const toSlug = (text) => {
  return _.chain(text).split(" ").join("-").toLower().value();
};

const slug = toSlug("This is super quiz");

//this-is-super-quiz

console.log(slug);
