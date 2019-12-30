import { useState, useEffect } from "react";

const useFormValidation = (initialState, validate, action) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  const performAction = async () => {
    return await action(values);
  };

  useEffect(() => {
    if (isSubmitting) {
      const hasErrors = Object.keys(errors).length > 0;
      if (hasErrors) {
        setSubmitting(false);
      } else {
        console.log("useValidationHook", values.title);
        if (action) {
          performAction();
        }
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values]);

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
