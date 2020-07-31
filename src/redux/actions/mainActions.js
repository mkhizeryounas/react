import { SET_ERROR } from '../constants';

export const setError = (error = '') => {
  return {
    type: SET_ERROR,
    error,
  };
};
