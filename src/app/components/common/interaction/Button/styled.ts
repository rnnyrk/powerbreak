import styled from 'styled-components';

export const ExtendedTouchableHighlight = styled.TouchableHighlight<ExtendedTouchableHighlightProps>`
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

type ExtendedTouchableHighlightProps = {
  disabled?: boolean;
  loading?: boolean;
}
