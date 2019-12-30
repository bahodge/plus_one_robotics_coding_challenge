// This service will handle the complication of making api calls and exposing an easy to use api.
import fetch from "node-fetch";
import { dispatchAddResultToSearchHistory } from "../redux/dispatcher";

const headers = {
  Accept: "*/*"
};

const baseOmdbApiEndpoint = process.env.REACT_APP_BASE_OMDB_API_ENDPOINT;
const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;

const searchByTitle = async ({ title }) => {
  const requestUrl = `${baseOmdbApiEndpoint}?apiKey=${omdbApiKey}&t=${title}`;
  const requestHeaders = {
    headers: headers,
    method: "POST",
    credentials: "same-origin"
  };

  return await fetch(requestUrl, requestHeaders)
    .then(res => res.json())
    .then(json => dispatchAddResultToSearchHistory(json.Title, json))
    .catch(error => error);
};

export { searchByTitle };
