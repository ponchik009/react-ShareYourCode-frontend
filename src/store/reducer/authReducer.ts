import { AuthActions, AuthActionTypes, AuthState } from "../../interfaces/auth";

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.FETCH_USER: {
      return {
        ...state,
        user: action.payload || null,
        isAuth: true,
      };
    }

    default: {
      return state;
    }
  }
};
