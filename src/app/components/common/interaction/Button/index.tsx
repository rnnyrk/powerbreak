import React from 'react';
import { Text } from 'react-native';

import { ExtendedTouchableHighlight } from './styled';

const Button: React.FC<ButtonProps> = ({
  onPress, disabled, loading, title
}) => (
  <ExtendedTouchableHighlight
    onPress={onPress}
    disabled={disabled || loading}
    loading={loading}
  >
    <Text>{title}</Text>
  </ExtendedTouchableHighlight>
);

Button.defaultProps = {
  disabled: false,
  loading: false,
}

type ButtonProps = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
};

export default Button;
