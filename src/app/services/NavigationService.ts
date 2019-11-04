import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/routers/lib/typescript/core/src';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: string, params?: object) => {
  navigationRef.current && navigationRef.current.navigate(name, params || {});
};

export const replace = (name: string, params?: object) => {
  navigationRef.current && navigationRef.current.replace(name, params || {});
};
