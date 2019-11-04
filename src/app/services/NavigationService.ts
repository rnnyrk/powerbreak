import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/routers/lib/typescript/core/src';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params: object) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}
