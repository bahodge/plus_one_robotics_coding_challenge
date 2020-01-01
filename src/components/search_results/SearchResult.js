import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
// import { store } from "../../redux/store";
// store.subscribe(() => store.getState().searchResult);

const SearchResult = props => {
  const { searchResult } = props;
  console.log("SearchResult Props", searchResult);

  if (searchResult) {
    return (
      <Grid>
        <Grid.Row>
          <p>Title {searchResult.Title}</p>
        </Grid.Row>
      </Grid>
    );
  } else {
    return (
      <Grid>
        <Grid.Row>
          <p>No Results</p>
        </Grid.Row>
      </Grid>
    );
  }
};

const mapStateToProps = (state, _ownProps) => {
  const { searchResult } = state;
  return {
    searchResult
  };
};

SearchResult.propTypes = {
  searchResult: PropTypes.object
};

export default connect(mapStateToProps)(SearchResult);
