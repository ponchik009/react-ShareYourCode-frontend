export interface IUser {
  id: number;
  name: string;
  isPublic: boolean;
}

export interface AuthState {
  user: IUser | null;
  isAuth: boolean;
}

export enum AuthActionTypes {
  FETCH_USER = "FETCH_USER",
  LOG_OUT = "LOG_OUT",
}

interface FetchUserAction {
  type: AuthActionTypes.FETCH_USER;
  payload?: IUser | null;
}

export type AuthActions = FetchUserAction;
