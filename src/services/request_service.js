// This service will handle the complication of making api calls and exposing an easy to use api.
import fetch from "node-fetch";

const headers = {
  Accept: "*/*",
  "Content-Type": "application/json"
};

const baseOmdbApiEndpoint = process.env.REACT_APP_BASE_OMDB_API_ENDPOINT;
const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;

const searchByTitle = async title => {
  const requestUrl = `${baseOmdbApiEndpoint}?apiKey=${omdbApiKey}&t=${title}`;
  const requestHeaders = {
    headers: headers,
    method: "GET",
    credentials: "same-origin"
  };

  console.log(requestUrl);
  console.log(requestHeaders);

  return await fetch(requestUrl, requestHeaders)
    .then(res => console.log(res))
    .catch(error => error);
};

export { searchByTitle };
