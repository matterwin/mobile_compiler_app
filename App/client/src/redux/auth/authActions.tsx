export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (token: any) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const logout = () => ({
  type: LOGOUT,
});