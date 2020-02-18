import { fetchUserData } from '../_services';

export const receiveToken = (token) => ({
  type: 'RECEIVE_TOKEN',
  payload: token
});
export const receiveUserId = (id) => ({
  type: 'RECEIVE_USER_ID',
  payload: id
});
export const receiveDisplayName = name => ({
  type: "RECEIVE_DISPLAY_NAME",
  payload: name
});

export const handleToken = (token) => (dispatch) => {
  dispatch(receiveToken(token));
};

export const handleUserInfo = (dispatch) => {
  return fetchUserData().then(res => {
    dispatch(receiveDisplayName(res.display_name));
    dispatch(receiveUserId(res.id));
  });
};
