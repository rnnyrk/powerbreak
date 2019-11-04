import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/routers/lib/typescript/core/src';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: string, params?: any) => {
  navigationRef.current && navigationRef.current.navigate(name, params || {});
};
