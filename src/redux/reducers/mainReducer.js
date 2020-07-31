import { SET_ERROR } from '../constants';

const initialState = {
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default reducer;
