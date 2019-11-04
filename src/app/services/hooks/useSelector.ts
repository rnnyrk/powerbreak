import { useSelector as reactReduxUseSelector, TypedUseSelectorHook } from 'react-redux';
import * as i from 'types';

const useSelector: TypedUseSelectorHook<i.ReduxState> = reactReduxUseSelector;

export default useSelector;
