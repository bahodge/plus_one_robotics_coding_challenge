import React from "react";
import { Segment, Header, Grid } from "semantic-ui-react";
import { store } from "../../redux/store";
import SearchHistorySideBarItems from "./SearchHistorySideBarItems";

const SearchHistorySideBar = props => {
  return (
    <Segment>
      <Header as="h3">Search History</Header>

      <SearchHistorySideBarItems />
    </Segment>
  );
};

export default SearchHistorySideBar;
