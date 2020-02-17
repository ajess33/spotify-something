import utils from './utils/general';

const USER_BASE_URL = `https://api.spotify.com/v1/me`;

export const fetchUserData = async () => {
  const { apiCall } = utils.useCallSpotify();
  const URL = USER_BASE_URL;
  return apiCall(URL);
};

export const fetchTopTracks = async () => {
  const { apiCall } = utils.useCallSpotify();
  const URL = `${USER_BASE_URL}/top/tracks`;
  return apiCall(URL);
};

export const fetchRecentlyPlayed = async () => {
  const { apiCall } = utils.useCallSpotify();
  const URL = `${USER_BASE_URL}/player/recently-played`;
  return apiCall(URL);
};

export const fetchUserLibrary = async () => {
  const { apiCall } = utils.useCallSpotify();
  const URL = `${USER_BASE_URL}/tracks`;
  return apiCall(URL);
};
// const searchForRelatedArtists = async () => {
//   const id = await fetchArtistID();
//   const URL = `https://api.spotify.com/v1/artists/${id}/related-artists`;
//   const config = requestConfig(URL, "GET", token);

//   const relatedArtists = await axios(config);
// }

// const fetchArtistID = async () => {
//   const f_artist = encodeURIComponent(artist);
//   let searchURL = `https://api.spotify.com/v1/search?q=${f_artist}&type=artist`;

//   const config = requestConfig(searchURL, "GET", token);
//   const response = await axios(config);
//   return response.data.artists.items[0].id;
// }
