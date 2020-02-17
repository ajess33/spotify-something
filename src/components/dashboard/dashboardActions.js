import {
  fetchTopTracks,
  fetchRecentlyPlayed,
  fetchUserLibrary
} from '../../_services';

export const receiveTopTracksStarted = () => ({
  type: 'RECEIVE_TOP_TRACKS_STARTED'
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

export const handleTopTracks = (dispatch) => {
  receiveTopTracksStarted();
  return fetchTopTracks().then((res) => {
    if (res.error) return dispatch(receiveTopTracksFailed(res.error));
    return dispatch(receiveTopTracksSucceeded(res.items));
  });
};

export const handleRecentlyPlayed = (dispatch) => {
  receiveRecentlyPlayedStarted();
  return fetchRecentlyPlayed().then((res) => {
    if (res.error) return dispatch(receiveRecentlyPlayedFailed(res.error));
    return dispatch(receiveRecentlyPlayedSucceeded(res.items));
  });
};

export const handleUserLibrary = (dispatch) => {
  receiveUserLibraryStarted();
  return fetchUserLibrary().then((res) => {
    if (res.error) return dispatch(receiveUserLibraryFailed(res.error));
    return dispatch(receiveUserLibrarySucceeded(res.items));
  });
};