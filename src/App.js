import React, { useState } from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import MovieSearchForm from "./components/forms/MovieSearchForm";
import SearchResult from "./components/search_results/SearchResult";
// import { store } from "./redux/store";
// import SearchHistorySideBar from "./components/search_history/SearchHistorySideBar";

// store.subscribe(() => console.log(store.getState().searchResult));

function App() {
  return (
    <Container>
      <Segment>
        <Grid columns={2}>
          <Grid.Column>
            <MovieSearchForm />
          </Grid.Column>
          <Grid.Column>
            <SearchResult />
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
}

export default App;
