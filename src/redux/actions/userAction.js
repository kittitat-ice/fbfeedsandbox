import * as types from './types';

export const getUser = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.status === 200) {
      dispatch(getUserSuccess(await response.json()));
    } else {
      dispatch(getUserFail());
    }
  };
};

export const getUserSuccess = (payload) => {
  return {type: types.GET_USER_SUCCESS, payload: payload};
};

export const getUserFail = () => {
  return {type: types.GET_USER_FAIL};
};

export const getPost = (userId) => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.status === 200) {
      let json = await response.json();

      let filtered = json.filter((val) => val.userId === userId);

      dispatch(getPostSuccess(filtered));
    } else {
      dispatch(getPostFail());
    }
  };
};

export const getPostSuccess = (payload) => {
  return {
    type: types.GET_POST_SUCCESS,
    payload: payload.map((val) => {
      val.time = new Date().toLocaleString();
      return val;
    }),
  };
};

export const getPostFail = () => {
  return {type: types.GET_POST_FAIL};
};

export const likePost = (postId) => {
  return {type: types.LIKE_POST, payload: postId};
};
export const unlikePost = (postId) => {
  return {type: types.UNLIKE_POST, payload: postId};
};
