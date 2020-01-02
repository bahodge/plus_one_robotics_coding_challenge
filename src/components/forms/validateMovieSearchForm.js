import { sanitizeStrings } from "./FormSanitizer";

export default values => {
  let errors = {};

  let sanitizedValues = sanitizeStrings(values);

  if (!sanitizedValues.title || sanitizedValues.title === "") {
    errors.title = "Required";
  }

  if (
    sanitizedValues.zipcode.length > 0 &&
    sanitizedValues.zipcode.length !== 5
  ) {
    errors.zipcode = "Invalid Zip Code - Must be 5 digits";
  }
  return errors;
};
