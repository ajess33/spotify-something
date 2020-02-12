import axios from 'axios';

const getToken = () => {
  const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
  window.location.hash = '';

  return hash.access_token;
};

export const spotifyAuthCheck = async () => {
  const _token = getToken();
  console.log(process.env.REACT_APP_REDIRECT_URI);
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  if (!_token) window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;

  const config = {
    method: 'GET',
    url: AUTH_ENDPOINT,
    headers: { Authorization: `Bearer ${_token}` }
  }

  let response = await axios(config);
  console.log(response);
}