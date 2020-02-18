const initialState = {
  topTracks: [],
  topTrackPopularity: null,
  recentlyPlayed: [],
  userLibrary: [],
  isLoading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'RECEIVE_TOP_TRACKS_STARTED':
      console.log('hhellow!');
      return { ...state, isLoading: true };
    case 'RECEIVE_TOP_TRACKS_FAILED':
      return { ...state, error: payload };
    case 'RECEIVE_TOP_TRACKS_SUCCEEDED':
      return { ...state, topTracks: payload };
    case 'RECEIVE_RECENTLY_PLAYED_STARTED':
      return { ...state, isLoading: true };
    case 'RECEIVE_RECENTLY_PLAYED_FAILED':
      return { ...state, error: payload };
    case 'RECEIVE_RECENTLY_PLAYED_SUCCEEDED':
      return { ...state, recentlyPlayed: payload };
    case 'RECEIVE_USER_LIBRARY_STARTED':
      return { ...state, isLoading: true };
    case 'RECEIVE_USER_LIBRARY_FAILED':
      return { ...state, error: payload };
    case 'RECEIVE_USER_LIBRARY_SUCCEEDED':
      return { ...state, userLibrary: payload };
    case 'RECEIVE_TOP_TRACK_POPULARITY':
      return { ...state, topTrackPopularity: payload };
    default:
      return state;
  }
}