import axios from 'axios';
import store from './redux/store';

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
  useCallSpotify,
  getHash
};
