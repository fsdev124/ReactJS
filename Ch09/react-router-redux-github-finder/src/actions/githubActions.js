import 'whatwg-fetch';
import {
  GET_GITHUB_INITIATE,
  GET_GITHUB_SUCCESS,
  GET_GITHUB_FAIL,
  CHAGE_USER_ID,
} from '../constants/actionTypes';

import {
  showSpinner,
  hideSpinner,
} from './uiActions';

<<<<<<< HEAD
export const getGithub = (userId = 'torvalds') => {
  console.log('github action');
=======
export const getGithub = (userId = 'torvalds') => (
>>>>>>> fsdev124/master
  (dispatch) => {
    dispatch({ type: GET_GITHUB_INITIATE });
    dispatch(showSpinner());
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then((json) => {
        dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } });
        dispatch(hideSpinner());
      })
      .catch(() => dispatch({ type: GET_GITHUB_FAIL }));
  }
);

export const changeUserId = text => ({ type: CHAGE_USER_ID, payload: { userId: text } });
