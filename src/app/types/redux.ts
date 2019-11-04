import * as i from 'types';
import { ThunkAction as IThunkAction, ThunkDispatch as IThunkDispatch } from 'redux-thunk';

/*
  Shape of a Redux action
  P = shape of payload
*/
export type Action<P = any> = {
  type: string;
  payload?: P;
  error?: boolean;
  meta?: any;
};

// Base state for Redux
export type BaseState<DataType> = {
  loading: boolean;
  error?: string;
  data: DataType;
};


// Thunk Dispatch action with pre-filled generics
export type ThunkDispatch = IThunkDispatch<i.ReduxState, any, i.Action>;

/*
  Thunk action type with pre-filled generics
  ReturnType = return type of function
*/
export type ThunkAction<ReturnType = void> = IThunkAction<ReturnType, i.ReduxState, {}, i.Action>;

