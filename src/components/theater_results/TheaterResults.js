import React from "react";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";
import TheaterResult from "./TheaterResult";

const TheaterResults = ({ theaterResults }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header as="h3">Movie Theaters</Header>
        </Grid.Column>
      </Grid.Row>
      {theaterResults && (
        <Grid.Row columns={4}>
          <Grid.Column>
            <strong>Name</strong>
          </Grid.Column>
          <Grid.Column>
            <strong>Rating</strong>
          </Grid.Column>
          <Grid.Column>
            <strong>Location</strong>
          </Grid.Column>
          <Grid.Column>
            <strong>Next Showtime</strong>
          </Grid.Column>
        </Grid.Row>
      )}
      {theaterResults &&
        theaterResults.map((theater, idx) => {
          if (idx < 5) {
            return (
              <Grid.Row key={idx}>
                <Grid.Column>
                  <TheaterResult theater={theater} />
                </Grid.Column>
              </Grid.Row>
            );
          }
          return null;
        })}
    </Grid>
  );
};

TheaterResults.propTypes = {
  theaterResults: PropTypes.array.isRequired
};

export default TheaterResults;
