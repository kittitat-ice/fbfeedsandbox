import * as types from '../actions/types';

const initialState = {
  user: [],
  post: [],
  like: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return {...state, user: action.payload};
    case types.GET_USER_FAIL:
      return {...state, user: []};
    case types.GET_POST_SUCCESS:
      return {...state, post: action.payload};
    case types.GET_POST_FAIL:
      return {...state, post: []};
    case types.LIKE_POST:
      return {
        ...state,
        like:
          state.like.findIndex((val) => val === action.payload) === -1
            ? [...state.like, action.payload]
            : [...state.like],
      };
    case types.UNLIKE_POST:
      return {
        ...state,
        like: state.like.filter((val) => val !== action.payload),
      };
    default:
      return state;
  }
};
