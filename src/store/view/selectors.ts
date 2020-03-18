import { ViewReducer, RootReducer } from '../../interfaces/redux';

export const initialState: ViewReducer = {
  isSidebarCollapsed: false,
};

export const isSidebarCollapsedSelector = ({ viewReducer }: RootReducer) =>
  viewReducer.isSidebarCollapsed;
