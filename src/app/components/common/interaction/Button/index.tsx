import React from 'react';
import * as i from 'types';

import theme from 'styles/theme';
import { TextContent } from 'common/typography';

import { ExtendedTouchableHighlight } from './styled';

const Button: React.FC<ButtonProps> = ({
  onPress, disabled, loading, title, variant, testID
}) => (
  <ExtendedTouchableHighlight
    onPress={onPress}
    underlayColor={theme.colors.purple.light}
    disabled={disabled || loading}
    loading={loading}
    variant={variant}
    testID={testID}
  >
    <TextContent>{title}</TextContent>
  </ExtendedTouchableHighlight>
);

Button.defaultProps = {
  disabled: false,
  loading: false,
  variant: 'primary',
}

type ButtonProps = i.TestProps & {
  onPress?: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
};

export default Button;
