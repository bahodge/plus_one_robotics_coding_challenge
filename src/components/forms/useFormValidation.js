import { useState, useEffect } from "react";
import { sanitizeStrings } from "./FormSanitizer";

const useFormValidation = (initialState, validate, action) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  const performAction = async formValues => await action(formValues);

  useEffect(() => {
    if (isSubmitting) {
      const hasErrors = Object.keys(errors).length > 0;
      if (hasErrors) {
        setSubmitting(false);
      } else {
        // This becomes super easy to chain multiple methods together
        let sanitizedValues = sanitizeStrings(values);
        console.log("Sanitized Form Values", sanitizedValues);
        if (action) {
          performAction(sanitizedValues);
        }
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    setSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    errors,
    isSubmitting
  };
};

export default useFormValidation;
