import { AuthReducer, RootReducer } from '../../interfaces/redux';

export const initialState: AuthReducer = {
  isAuth: false,
  authLoading: false,
};

export const isAuthSelector = ({ authReducer }: RootReducer) =>
  authReducer.isAuth;
export const authLoadingSelector = ({ authReducer }: RootReducer) =>
  authReducer.authLoading;
