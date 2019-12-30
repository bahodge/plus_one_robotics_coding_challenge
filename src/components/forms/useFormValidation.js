import React, { useState } from "react";

const useFormValidation = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return { handleChange, values };
};

export default useFormValidation;
