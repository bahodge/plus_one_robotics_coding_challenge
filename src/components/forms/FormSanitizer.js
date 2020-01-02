const sanitizeStrings = inputObject => {
  let sanitizedValues = Object.assign({}, inputObject);

  Object.keys(sanitizedValues).map(key => {
    if (typeof inputObject[key] === "string") {
      return (sanitizedValues[key] = inputObject[key]
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " "));
    }
    return sanitizedValues[key];
  });
  return sanitizedValues;
};

const sanitizeIntegers = inputObject => {
  let sanitizedValues = Object.assign({}, inputObject);

  Object.keys(sanitizedValues).map(key => {
    if (typeof inputObject[key] === "number") {
      return (sanitizedValues[key] = parseInt(inputObject[key]));
    } else if (inputObject[key] === "") {
      return (sanitizedValues[key] = null);
    }
    return sanitizedValues[key];
  });
  return sanitizedValues;
};

export { sanitizeStrings, sanitizeIntegers };
