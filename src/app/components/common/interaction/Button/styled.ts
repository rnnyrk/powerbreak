import styled, { css } from 'styled-components';

export const ExtendedTouchableHighlight = styled.TouchableHighlight<ExtendedTouchableHighlightProps>`
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.blue};

  ${({ variant }) => variant === 'secondary' && css`
    border: 1px solid ${({ theme }) => theme.colors.purple.light};
    background-color: ${({ theme }) => theme.colors.purple.dark};
  `}
`;

type ExtendedTouchableHighlightProps = {
  disabled?: boolean;
  loading?: boolean;
  variant: 'primary' | 'secondary';
};