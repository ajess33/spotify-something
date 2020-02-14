import { fetchUserData } from '../_services';

export const receiveToken = (token) => ({
  type: 'RECEIVE_TOKEN',
  payload: token
});
export const receiveUserId = (id) => ({
  type: 'RECEIVE_USER_ID',
  payload: id
});
export const receiveTopTracksStarted = () => ({
  type: 'RECEIVE_TOP_TRACKS'
});
export const receiveTopTracksFailed = (error) => ({
  type: 'RECEIVE_TOP_TRACKS_FAILED',
  payload: error
});
export const receiveTopTracksSucceeded = (tracks) => ({
  type: 'RECEIVE_TOP_TRACKS_SUCCEEDED',
  payload: tracks
});
export const receiveRecentlyPlayedStarted = () => ({
  type: 'RECEIVE_RECENTLY_PLAYED_STARTED'
});
export const receiveRecentlyPlayedFailed = (error) => ({
  type: 'RECEIVE_RECENTLY_PLAYED_FAILED',
  payload: error
});
export const receiveRecentlyPlayedSucceeded = (recentlyPlayed) => ({
  type: 'RECEIVE_RECENTLY_PLAYED_SUCCEEDED',
  payload: recentlyPlayed
});
export const receiveUserLibraryStarted = () => ({
  type: 'RECEIVE_USER_LIBRARY_STARTED'
});
export const receiveUserLibraryFailed = (error) => ({
  type: 'RECEIVE_USER_LIBRARY_FAILED',
  payload: error
});
export const receiveUserLibrarySucceeded = (library) => ({
  type: 'RECEIVE_USER_LIBRARY_SUCCEEDED',
  payload: library
});

export const handleToken = (token) => (dispatch) => {
  console.log('action handler', token);
  dispatch(receiveToken(token));
};

export const handleUserId = () => async (dispatch) => {
  return fetchUserData().then((res) => dispatch(receiveUserId(res.id)));
};

// export const handleTopTracks = tracks => async dispatch => {
//   receiveTopTracksStarted();
//   await fetchTopTracks()
// }
