import React from "react";
import PropTypes from "prop-types";

import { Grid, Header } from "semantic-ui-react";

// THe showtime dates are lies!!!!!!!!!
const generateRandomTime = id => {
  if (!id) return new Date().toLocaleTimeString();

  const ascii = id.split("").map(char => char.charCodeAt(0));
  const sum = ascii.reduce((acc, num) => acc + num, 0);
  const generatedDate = new Date(10000 * sum).toLocaleTimeString();

  return `${generatedDate}`;
};

const TheaterResult = ({ theater }) => {
  const { formatted_address, vicinity, name, rating, id } = theater;

  const showtime = generateRandomTime(id);
  return (
    <Grid columns={4}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h5">{name}</Header>
        </Grid.Column>
        <Grid.Column>{rating}</Grid.Column>
        <Grid.Column>{formatted_address || vicinity}</Grid.Column>
        <Grid.Column>{showtime}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

TheaterResult.propTypes = {
  theater: PropTypes.object.isRequired
};

export default TheaterResult;
