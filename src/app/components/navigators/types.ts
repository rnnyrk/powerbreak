import { RouteProp } from '@react-navigation/core';
import * as i from 'types';

export type RootStackParams = {
  FaqModal: undefined;
  Main: undefined;
  Login: {
    resetAuthToken?: boolean;
  };
};

export type PagesStackParams = {
  Overview: undefined;
  Detail: {
    id?: number;
  };
};

export type ContactStackParams = {
  Step1: undefined;
};

export type LoginScreenRouteProp = RouteProp<i.RootStackParams, 'Login'>;

export type DetailScreenRouteProp = RouteProp<i.PagesStackParams, 'Detail'>;