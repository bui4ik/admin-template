import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import viewReducer from './view/reducer';
import authReducer from './auth/reducer';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const reducers = combineReducers({
  viewReducer,
  authReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
