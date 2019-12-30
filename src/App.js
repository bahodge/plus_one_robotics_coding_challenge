import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import MovieSearchForm from "./components/forms/MovieSearchForm";
import SearchHistorySideBar from "./components/search_history/SearchHistorySideBar";

function App() {
  return (
    <Container>
      <Segment>
        <Grid columns={2}>
          <Grid.Column>
            <SearchHistorySideBar />
          </Grid.Column>
          <Grid.Column>
            <MovieSearchForm />
          </Grid.Column>
        </Grid>
        {/* <Grid column={1}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3">Hello</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </Segment>
    </Container>
  );
}

export default App;
