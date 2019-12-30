import React from "react";
// import PropTypes from "prop-types";
import useFormValidation from "./useFormValidation";
import validateMovieSearchForm from "./validateMovieSearchForm";
import { searchByTitle } from "../../services/request_service";

const INITIAL_STATE = {
  title: ""
};

const MovieSearchForm = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateMovieSearchForm, searchByTitle);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="title"
          placeholder="Title"
          autoComplete="off"
          onChange={handleChange}
          value={values.title}
          onBlur={handleBlur}
          className={errors.title && "error-input"}
        />
        {errors.title && <p className="error-text">{errors.title}</p>}
      </div>
      <div>
        <button type="submit" disabled={isSubmitting}>
          Search
        </button>
      </div>
    </form>
  );
};

export default MovieSearchForm;
