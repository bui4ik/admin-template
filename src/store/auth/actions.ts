export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

interface IAction {
  username: string;
  password: string;
  remember: boolean;
}

export const signinRequestAC = ({ username, password, remember }: IAction) => ({
  type: SIGNIN_REQUEST,
  payload: { username, password, remember },
});

export const signinSuccessAC = () => ({
  type: SIGNIN_SUCCESS,
});

export const signinFailureAC = (error: string) => ({
  type: SIGNIN_FAILURE,
  payload: { error },
});
