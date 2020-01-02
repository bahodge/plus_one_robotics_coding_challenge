import { useState, useEffect } from "react";
import { sanitizeStrings, sanitizeIntegers } from "./FormSanitizer";

const useFormValidation = (initialState, validate, actions) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  const performActions = async formValues => {
    return await actions.map(action => performAction(action, formValues));
  };
  const performAction = async (action, formValues) => await action(formValues);

  useEffect(() => {
    if (isSubmitting) {
      const hasErrors = Object.keys(errors).length > 0;
      if (hasErrors) {
        setSubmitting(false);
      } else {
        // This becomes super easy to chain multiple methods together
        let sanitizedValues = sanitizeStrings(values);
        sanitizedValues = sanitizeIntegers(sanitizedValues);
        // console.log("Sanitized Form Values", sanitizedValues);
        if (actions.length > 0) {
          performActions(sanitizedValues);
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
