import React from "react";
import PropTypes from "prop-types";

import { Grid, Header } from "semantic-ui-react";

const TheaterResult = ({ theater }) => {
  const { formatted_address, vicinity, name, rating } = theater;

  console.log(theater);
  return (
    <Grid columns={4}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h5">{name}</Header>
        </Grid.Column>
        <Grid.Column>{rating}</Grid.Column>
        <Grid.Column>{formatted_address || vicinity}</Grid.Column>
        <Grid.Column>11:45</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

TheaterResult.propTypes = {
  theater: PropTypes.object.isRequired
};

export default TheaterResult;
