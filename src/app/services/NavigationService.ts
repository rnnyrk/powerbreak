let _navigator;

export const setContainer = (navigatorRef) => {
  _navigator = navigatorRef;
};

export const navigate = (name: string, params?: any) => {
  _navigator.current && _navigator.current.navigate(name, params || {});
};
