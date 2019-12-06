import React from 'react';
import { useField } from 'react-final-form';

import { ErrorText } from './styled';

const Error: React.FC<ErrorProps> = ({ name }) => {
  const {
    meta: { touched, error },
  } = useField(name, { subscription: { touched: true, error: true } });

  return touched && error ? (
    <ErrorText variant="red">{error}</ErrorText>
  ) : null;
};

type ErrorProps = {
  name: string;
};

export default Error;
