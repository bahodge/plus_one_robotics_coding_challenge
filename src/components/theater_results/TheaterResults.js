import React from "react";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";

const TheaterResults = ({ theaterResults }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header as="h3">Movie Theaters</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

TheaterResults.propTypes = {
  theaterResults: PropTypes.array
};

export default TheaterResults;
