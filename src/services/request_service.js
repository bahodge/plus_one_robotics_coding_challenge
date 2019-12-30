// This service will handle the complication of making api calls and exposing an easy to use api.
import fetch from "node-fetch";

const headers = {
  Accept: "*/*",
  "Content-Type": "application/json"
};

const baseApiEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT;

const searchText = async () => {
  const requestUrl = `${baseApiEndpoint}`;
  const requestHeaders = {
    headers: headers,
    method: "GET",
    credentials: "same-origin"
  };

  return await fetch(requestUrl, requestHeaders)
    .then(res => console.log(res))
    .catch(error => error);
};

export { searchText };
