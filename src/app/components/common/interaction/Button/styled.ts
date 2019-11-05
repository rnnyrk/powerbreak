import styled, { css } from 'styled-components';

export const ExtendedTouchableHighlight = styled.TouchableHighlight<ExtendedTouchableHighlightProps>`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.blue};

  ${({ variant }) => variant === 'secondary' && css`
    border: 1px solid ${({ theme }) => theme.colors.purple.light};
    background-color: ${({ theme }) => theme.colors.purple.default};
  `}
`;

type ExtendedTouchableHighlightProps = {
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
};