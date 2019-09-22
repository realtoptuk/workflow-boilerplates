import * as actionTypes from './actionTypes';
import { push } from 'connected-react-router';

export const updateLogger = () => async dispatch => {
  setLoading()(dispatch);

  const t = new Promise(resolve => {
    setTimeout(() => {
      resolve([4, 8, [15, 16], 23, [42]]);
    }, 1500);
  });

  const res = await t;

  dispatch({
    type: actionTypes.UPDATE_LOGGER,
    payload: res,
  });
};

export const setLoading = () => dispatch =>
  dispatch({
    type: actionTypes.SET_LOADING,
  });

export const goTestPage = () => dispatch => dispatch(push('/test'));
