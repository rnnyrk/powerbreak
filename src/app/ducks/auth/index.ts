import { ActionType, action } from 'typesafe-actions';
import * as i from 'types';

export const authActions = {
  set: (accessToken: string) => action('auth/SET', accessToken),
  reset: () => action('auth/RESET'),
};

const initialState: i.AuthState = {
  data: {
    accessToken: undefined,
  },
  error: undefined,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof authActions>) => {
  switch (action.type) {
  case 'auth/SET':
    return {
      ...state,
      data: {
        accessToken: action.payload,
      },
      error: false,
      loading: false,
    };

  case 'auth/RESET':
    return initialState;

  default:
    return state;
  }
};

export const setAuth = (accessToken: string) => (dispatch) => {
  dispatch(authActions.set(accessToken));
};

export const resetAuth = () => (dispatch) => {
  dispatch(authActions.reset());
};
