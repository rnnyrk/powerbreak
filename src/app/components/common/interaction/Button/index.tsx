import React from 'react';

import theme from 'styles/theme';
import { TextContent } from 'common/typography';

import { ExtendedTouchableHighlight } from './styled';

const Button: React.FC<ButtonProps> = ({
  onPress, disabled, loading, title, variant
}) => (
  <ExtendedTouchableHighlight
    onPress={onPress}
    underlayColor={theme.colors.purple.light}
    disabled={disabled || loading}
    loading={loading}
    variant={variant}
  >
    <TextContent>{title}</TextContent>
  </ExtendedTouchableHighlight>
);

Button.defaultProps = {
  disabled: false,
  loading: false,
  variant: 'primary',
}

type ButtonProps = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
  variant: 'primary' | 'secondary';
};

export default Button;
