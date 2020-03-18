import { initialState } from './selectors';
import * as actions from './actions';

interface Action {
  type: string;
}

const viewReducer = (state = initialState, { type }: Action) => {
  switch (type) {
    case actions.TOGGLE_SIDEBAR: {
      return {
        ...state,
        isSidebarCollapsed: !state.isSidebarCollapsed,
      };
    }
    default: {
      return state;
    }
  }
};

export default viewReducer;
