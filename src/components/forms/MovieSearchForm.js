import React from "react";
import { Button, Form } from "semantic-ui-react";
// import PropTypes from "prop-types";
import useFormValidation from "./useFormValidation";
import validateMovieSearchForm from "./validateMovieSearchForm";
import { searchByTitle, getTheaters } from "../../services/request_service";

const INITIAL_STATE = {
  title: "",
  zipcode: ""
};

const MovieSearchForm = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateMovieSearchForm, [
    searchByTitle,
    getTheaters
  ]);

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

        <label>Zip Code</label>
        <input
          name="zipcode"
          type="number"
          placeholder="Zip Code"
          autoComplete="off"
          onChange={handleChange}
          value={values.zipcode}
          onBlur={handleBlur}
        />

        {errors.zipcode && <p>{errors.zipcode}</p>}
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
