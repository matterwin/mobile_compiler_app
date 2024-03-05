import { LOGIN_SUCCESS, LOGOUT } from './authActions';
// import { logout } from '../../api/handleAuth';

const initialState = {
  isAuthenticated: false,
  token: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case LOGOUT:
    //   logout();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;