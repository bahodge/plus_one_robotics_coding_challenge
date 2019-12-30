import React from "react";
import PropTypes from "prop-types";

const validateMovieSearchForm = values => {
  let errors = {};

  if (!values.title || values.title === "") {
    errors.title = "Required";
  }

  // Add searchable area validation

  return errors;
};

validateMovieSearchForm.propTypes = {
  title: PropTypes.string.isRequired
};

export default validateMovieSearchForm;
