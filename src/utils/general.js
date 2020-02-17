import axios from 'axios';
import store from '../redux/store'

export const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token&scope=user-top-read%20user-read-recently-played%20user-library-read&show_dialog=true`;

export const getHashParams = () => {
  const hashParams = {};
  let e;
  const pattern = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  while ((e = pattern.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

export const getHash = () => {
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
  return hash;
};

export const callSpotify = (token) => (path, method = 'GET', body = null) => {
  let config = {
    method,
    url: path,
    headers: { Authorization: `Bearer ${token}` }
  };

  return axios(config)
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

export const useCallSpotify = () => {
  const { token } = store.getState().generalData;
  const apiCall = callSpotify(token);
  return { apiCall };
};

export default {
  SPOTIFY_AUTH_URL,
  getHashParams,
  useCallSpotify
};