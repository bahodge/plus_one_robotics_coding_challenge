import React from "react";
import PropTypes from "prop-types";

const TheaterResult = ({ theater }) => {
  return <div>This is a theater</div>;
};

TheaterResult.propTypes = {
  theater: PropTypes.object.isRequired
};

export default TheaterResult;
