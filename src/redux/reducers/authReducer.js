import * as types from '../actions/types';

const initialState = {
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {...state, isLogin: true};
    default:
      return state;
  }
};
