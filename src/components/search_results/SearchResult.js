import React from "react";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";

const SearchResult = props => {
  const { searchResult } = props;
  console.log("SearchResult Props", searchResult);

  if (searchResult) {
    return (
      <Grid>
        <Grid.Row>
          <Header as="h4">{searchResult.Title}</Header>
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
