import React from "react";
import PropTypes from "prop-types";
import { Grid, Header, List, Image } from "semantic-ui-react";

const SearchResult = ({ searchResult }) => {
  console.log("SearchResult", searchResult);

  if (searchResult) {
    const {
      Title,
      Rated,
      Released,
      Runtime,
      Ratings,
      Plot,
      Poster,
      Awards
    } = searchResult;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as="h4">Title: {Title}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <strong>Release:</strong> {Released}
          </Grid.Column>
          <Grid.Column>
            <strong>Runtime:</strong> {Runtime}
          </Grid.Column>
          <Grid.Column>
            <strong>Rated:</strong> {Rated}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <strong>Ratings:</strong>
            {
              <List>
                {Ratings.map(({ Source, Value }, idx) => (
                  <List.Item key={idx}>
                    <strong>{Source}</strong>: {Value}
                  </List.Item>
                ))}
              </List>
            }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Plot: </Header>
            <p>{Plot}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <strong>Awards:</strong> {Awards}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {Poster ? (
              <Image size="medium" src={Poster} alt={`${Title} Poster`} />
            ) : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  } else {
    return (
      <Grid>
        <Grid.Row>
          <Header as="h4">No Results</Header>
        </Grid.Row>
      </Grid>
    );
  }
};

SearchResult.propTypes = {
  searchResult: PropTypes.object
};

export default SearchResult;
