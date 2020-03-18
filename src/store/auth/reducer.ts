import { initialState } from './selectors';
import * as actions from './actions';

interface Action {
  type: string;
}

const authReducer = (state = initialState, { type }: Action) => {
  switch (type) {
    case actions.SIGNIN_REQUEST: {
      return {
        ...state,
        authLoading: true,
      };
    }
    case actions.SIGNIN_SUCCESS: {
      return {
        ...state,
        authLoading: false,
        isAuth: true
      };
    }
    case actions.SIGNIN_FAILURE: {
      return {
        ...state,
        authLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
