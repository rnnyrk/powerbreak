import styled, { css } from 'styled-components';

export const TextContent = styled.Text<TextContentProps>`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};

  ${({ variant }) => variant === 'blue' && css`
    color: ${({ theme }) => theme.colors.blue.default};
  `}
`;

type TextContentProps = {
  variant?: 'default' | 'blue';
}

export default TextContent;
