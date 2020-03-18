export interface ViewReducer {
  isSidebarCollapsed: boolean;
}

export interface RootReducer {
  viewReducer: ViewReducer;
}
