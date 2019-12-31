export default values => {
  let errors = {};

  if (!values.title || values.title === "") {
    errors.title = "Required";
  }

  return errors;
};
