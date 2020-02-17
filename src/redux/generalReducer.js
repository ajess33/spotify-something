const initialState = {
  token: null,
  userId: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'RECEIVE_TOKEN':
      return { ...state, token: payload };
    case 'RECEIVE_USER_ID':
      return { ...state, userId: payload };
    default:
      return state;
  }
}
