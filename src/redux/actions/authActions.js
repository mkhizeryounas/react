import { CHANGE_LOGGED_IN_FLAG, SET_CURRENT_USER } from '../constants';

import { http } from '../../services/http';
import { toast } from 'react-toastify';

export const changeLoggedInFlag = (isLoggedIn) => {
  return {
    type: CHANGE_LOGGED_IN_FLAG,
    isLoggedIn,
  };
};

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    currentUser: user,
  };
};

export const login = (username = '', password = '') => {
  return async (dispatch) => {
    try {
      let user = await http.post(`/users/login`, {
        username,
        password,
      });
      if (!user.data.status) throw Error(user.data.message);
      if (user.data.super_user !== user.data.user_info.user_id)
        throw Error('This admin panel only allows superuser accounts');

      let superStore = user.data.store_info[0];
      user = await http.post(
        `users/selectStore`,
        {
          store_random: superStore.store_random,
        },
        {
          headers: {
            Authorization: user.data?.auth_token,
          },
        }
      );
      window.localStorage.setItem('x-sd-user', JSON.stringify(user.data));
      dispatch(setCurrentUser(user.data));
    } catch (err) {
      console.log('Error in login', err);
      toast.error(err.message || 'Something went wrong.');
    }
  };
};
