import React from "react";
import { Segment, Header, Grid } from "semantic-ui-react";

const SearchHistorySideBar = props => {
  return (
    <Segment>
      <Header as="h3">Search History</Header>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>Item</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Item</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Item</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Item</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Item</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Item</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Item</Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default SearchHistorySideBar;
