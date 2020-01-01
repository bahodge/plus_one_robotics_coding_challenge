import React, { useState } from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import MovieSearchForm from "./components/forms/MovieSearchForm";
import SearchResult from "./components/search_results/SearchResult";
import TheaterResults from "./components/theater_results/TheaterResults";
import { store } from "./redux/store";

function App() {
  const [searchResult, setSearchResult] = useState(null);

  store.subscribe(() => {
    const { searchResult } = store.getState();
    setSearchResult(searchResult);
  });

  return (
    <Container>
      <Segment>
        <Grid columns={2}>
          <Grid.Column>
            <Grid.Row>
              <MovieSearchForm />
            </Grid.Row>
            <Grid.Row style={{ marginTop: "1rem" }}>
              <Grid.Column>
                <TheaterResults />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <SearchResult searchResult={searchResult} />
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
}

export default App;
