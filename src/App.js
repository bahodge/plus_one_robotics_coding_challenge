import React from "react";
import "semantic-ui-css/semantic.min.css";
import MovieSearchForm from "./components/forms/MovieSearchForm";
import SearchHistorySideBar from "./components/search_history/SearchHistorySideBar";

import { Container, Divider, Grid, Segment } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <SearchHistorySideBar />
          </Grid.Column>
          <Grid.Column>
            <MovieSearchForm />
          </Grid.Column>
          <Divider vertical />
        </Grid>
      </Segment>
    </Container>
  );
}

export default App;
