import { fetchUserData } from '../_services';

export const receiveToken = (token) => ({
  type: 'RECEIVE_TOKEN',
  payload: token
});
export const receiveUserId = (id) => ({
  type: 'RECEIVE_USER_ID',
  payload: id
});

export const handleToken = (token) => (dispatch) => {
  dispatch(receiveToken(token));
};

export const handleUserId = () => async (dispatch) => {
  return fetchUserData().then((res) => dispatch(receiveUserId(res.id)));
};
