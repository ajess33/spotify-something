import utils from './utils';

export const spotifyAuthCheck = async () => {
  const { apiCall } = utils.useCallSpotify();
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=user-top-read%20user-read-recently-played%20user-library-read`;

  return apiCall(AUTH_ENDPOINT);
};

export const fetchUserData = async () => {
  const { apiCall } = utils.useCallSpotify();
  const URL = `https://api.spotify.com/v1/me`;
  return apiCall(URL);
};

export const fetchTopTracks = async () => {
  const { apiCall } = utils.useCallSpotify();
  const URL = `https://api.spotify.com/v1/me/top/tracks`;
  return apiCall(URL);
};
