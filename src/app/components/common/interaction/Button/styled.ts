import { TouchableHighlight } from 'react-native-gesture-handler';
import { TouchableHighlightProperties } from 'react-native';
import styled, { css } from 'styled-components';

export const ExtendedTouchableHighlight = styled(TouchableHighlight)<ExtendedTouchableHighlightProps>`
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 56px;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.blue.default};

  ${({ variant }) => variant === 'secondary' && css`
    border: 1px solid ${({ theme }) => theme.colors.purple.light};
    background-color: ${({ theme }) => theme.colors.purple.default};
  `}
`;

type ExtendedTouchableHighlightProps = TouchableHighlightProperties & {
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
};
