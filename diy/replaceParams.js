const initialUrl = "posts/:postID/comments/:commentID";

function replaceParamsInURL(initialUrl, conversions) {
  return _.reduce(
    conversions,
    (url, conversion) => {
      return _.replace(url, ":" + conversion.from, conversion.to);
    },
    initialUrl
  );
}

const resultURL = replaceParamsInURL(initialUrl, [
  {
    from: "postID",
    to: "1",
  },
  {
    from: "commentID",
    to: "3",
  },
]);

console.log(resultURL);
