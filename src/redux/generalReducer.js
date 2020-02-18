const initialState = {
  token: null,
  userId: null,
  displayName: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'RECEIVE_TOKEN':
      return { ...state, token: payload };
    case 'RECEIVE_USER_ID':
      return { ...state, userId: payload };
    case 'RECEIVE_DISPLAY_NAME':
      return { ...state, displayName: payload };
    default:
      return state;
  }
}
