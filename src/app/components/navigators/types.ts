import { RouteProp } from '@react-navigation/core';
import * as i from 'types';

export type RootStackParamList = {
  Main: undefined;
  ProfileModal: undefined;
  Login: {
    resetAuthToken?: boolean
  };
};

export type LoginScreenRouteProp = RouteProp<i.RootStackParamList, 'Login'>;