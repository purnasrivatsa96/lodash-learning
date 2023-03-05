const backendErrors = {
  email: {
    errors: [
      {
        message: "Cant be blank",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain symbols in different case",
      },
      {
        message: "Must be at least 8 symbols in length",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must match with password",
      },
    ],
  },
};

function getError(errorValue, errorKey) {
  const errorkeyCapitalized = _.capitalize(errorKey);
  const errorMessages = _.chain(errorValue.errors)
    .map("message")
    .join(", ")
    .value();
  const error = errorkeyCapitalized + ": " + errorMessages;
  return error;
}

function getValidationMessage(backendErrors) {
  return _.chain(backendErrors).map(getError).value();
}

const result = getValidationMessage(backendErrors);
console.log(result);
//["Email: Cant be blank","Password: Must contain symbols in different case, Must be at least 8 symbols in length","Message: Must match with password"]
