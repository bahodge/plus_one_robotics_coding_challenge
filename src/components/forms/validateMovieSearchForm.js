import { sanitizeStrings } from "./FormSanitizer";

export default values => {
  let errors = {};

  let sanitizedValues = sanitizeStrings(values);

  if (!sanitizedValues.title || sanitizedValues.title === "") {
    errors.title = "Required";
  }
  return errors;
};
