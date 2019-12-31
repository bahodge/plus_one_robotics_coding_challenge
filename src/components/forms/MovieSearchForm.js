import React from "react";
import { Button, Form } from "semantic-ui-react";
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
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Movie Title</label>
        <input
          name="title"
          placeholder="Title"
          autoComplete="off"
          onChange={handleChange}
          value={values.title}
          onBlur={handleBlur}
        />
        {errors.title && <p>{errors.title}</p>}
      </Form.Field>

      <Button
        type="submit"
        disabled={isSubmitting || Object.keys(errors).length > 0}
      >
        Search
      </Button>
    </Form>
  );
};

export default MovieSearchForm;
