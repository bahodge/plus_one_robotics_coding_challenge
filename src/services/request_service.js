// This service will handle the complication of making api calls and exposing an easy to use api.
import fetch from "node-fetch";
import zipcodes from "zipcodes";

import {
  dispatchAddToSearchResult,
  dispatchClearSearchResult
} from "../redux/dispatcher";

const headers = {
  Accept: "*/*"
};

const baseOmdbApiEndpoint = process.env.REACT_APP_BASE_OMDB_API_ENDPOINT;
const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;
const baseGoogleApiEndpoint = process.env.REACT_APP_BASE_GOOGLE_API_ENDPOINT;
const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const searchByTitle = async ({ title }) => {
  const requestUrl = `${baseOmdbApiEndpoint}?apiKey=${omdbApiKey}&t=${title}`;
  const requestHeaders = {
    headers: headers,
    method: "POST",
    credentials: "same-origin"
  };

  return await fetch(requestUrl, requestHeaders)
    .then(res => res.json())
    .then(json => {
      dispatchClearSearchResult();

      if (json.hasOwnProperty("Response") && json.Response === "False") {
        console.log("No Results", json);
        // should set the search result to display the error
      } else if (json.hasOwnProperty("Response") && json.Response === "True") {
        dispatchAddToSearchResult(json);
        // return dispatchAddResultToSearchHistory(json.Title, json);
        // should set search result to display the movie info
      }
    })
    .catch(error => error);
};

const getTheaters = async formValues => {
  const { zipcode } = formValues;

  // should be able to search with zipcode or without zipcode

  // const zipcode = 78213;
  const { latitude, longitude } = zipcodes.lookup(zipcode) || {};

  if (latitude && longitude) {
    return await getNearbyTheaters(latitude, longitude);
  } else {
    return getTextSearchTheaters();
  }
};

const getTextSearchTheaters = async () => {
  const input = "input=movie%20theater";
  const inputType = "inputtype=textquery";
  const radius = "radius=10000";
  const returnFields =
    "fields=formatted_address,name,rating,opening_hours,geometry";
  const requestUrl = `${baseGoogleApiEndpoint}textsearch/json?${input}&${inputType}&${radius}&${returnFields}&key=${googleApiKey}`;

  console.log(requestUrl);
};

const getNearbyTheaters = async (latitude, longitude) => {
  console.log(latitude, longitude);
  const location = `location=${latitude},${longitude}&rankby=distance`;
  const type = "type=movie_theater";
  const returnFields =
    "fields=formatted_address,name,rating,opening_hours,geometry";
  const requestUrl = `${baseGoogleApiEndpoint}nearbysearch/json?${location}&${type}&${returnFields}&key=${googleApiKey}`;

  console.log(requestUrl);
};

export { searchByTitle, getTheaters };
