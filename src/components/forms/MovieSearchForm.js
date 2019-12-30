import React from "react";
import PropTypes from "prop-types";
import useFormValidation from "./useFormValidation";
import validateMovieSearchForm from "./validateMovieSearchForm";

const INITIAL_STATE = {
  title: ""
};

const MovieSearchForm = props => {
  const { handleChange, values } = useFormValidation(INITIAL_STATE);

  const handleSubmit = event => {
    event.preventDefault();

    console.log("useValidationHook", values.title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        autoComplete="off"
        onChange={handleChange}
        value={values.title}
        // className={errors.email && "error-input"}
        // autoComplete="off"
        // placeholder="Your email address"
      />
      {/* {errors.email && <p className="error-text">{errors.email}</p>} */}
    </form>
  );
};

MovieSearchForm.propTypes = {};

export default MovieSearchForm;
