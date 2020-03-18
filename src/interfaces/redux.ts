export interface ViewReducer {
  isSidebarCollapsed: boolean;
}

export interface AuthReducer {
  isAuth: boolean;
  authLoading: boolean;
}

export interface RootReducer {
  viewReducer: ViewReducer;
  authReducer: AuthReducer;
}
