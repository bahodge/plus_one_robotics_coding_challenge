import React from "react";
import PropTypes from "prop-types";
import { Grid, Header, List } from "semantic-ui-react";

const SearchResult = props => {
  const { searchResult } = props;
  console.log("SearchResult Props", searchResult);

  if (searchResult) {
    const {
      Title,
      Year,
      Rated,
      Released,
      Runtime,
      Genre,
      Ratings,
      Plot,
      Poster,
      Awards,
      Language
    } = searchResult;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Title: {Title}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <strong>Release:</strong> {Released}
          </Grid.Column>
          <Grid.Column>
            <strong>Runtime:</strong> {Runtime}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <List>
              {Ratings.map(({ Source, Value }, idx) => (
                <List.Item key={idx}>
                  <strong>{Source}</strong> - {Value}
                </List.Item>
              ))}
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <p>{Plot}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {Poster ? <img src={Poster} alt={`${Title} Poster`} /> : null}}
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
