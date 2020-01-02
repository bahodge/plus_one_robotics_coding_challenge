import React, { useState } from "react";
import { Container, Grid, Segment, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import MovieSearchForm from "./components/forms/MovieSearchForm";
import SearchResult from "./components/search_results/SearchResult";
import TheaterResults from "./components/theater_results/TheaterResults";
import { store } from "./redux/store";

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [theaterResults, setTheaterResults] = useState(null);

  store.subscribe(() => {
    const { searchResult, theaterResults } = store.getState();
    setSearchResult(searchResult);
    setTheaterResults(theaterResults);
  });

  return (
    <Container style={{ marginTop: "3rem" }}>
      <Header as="h1">Movie Search Application</Header>
      <Segment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <strong>Instructions:</strong> Enter the title of a movie and
              optionally enter your zip code to find the nearest theater to you.
            </Grid.Column>
          </Grid.Row>
          <Grid.Column>
            <Grid.Row>
              <MovieSearchForm />
            </Grid.Row>
            <Grid.Row style={{ marginTop: "1rem" }}>
              <Grid.Column>
                <TheaterResults theaterResults={theaterResults} />
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
