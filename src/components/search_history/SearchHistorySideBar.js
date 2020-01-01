import React from "react";
import { Segment, Header } from "semantic-ui-react";
import SearchHistorySideBarItems from "./SearchHistorySideBarItems";
import { connect } from "react-redux";

const SearchHistorySideBar = props => {
  return (
    <Segment>
      <Header as="h3">Search History</Header>

      <SearchHistorySideBarItems />
    </Segment>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SearchHistorySideBar);
