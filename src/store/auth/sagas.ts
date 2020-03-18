import { takeLatest, put, all } from 'redux-saga/effects';
import * as ac from './actions';

function* signIn() {
  try {
    yield put(ac.signinSuccessAC());
  } catch (e) {
    yield put(ac.signinFailureAC(e));
  }
}

export default function*() {
  yield all([takeLatest(ac.SIGNIN_REQUEST, signIn)]);
}
