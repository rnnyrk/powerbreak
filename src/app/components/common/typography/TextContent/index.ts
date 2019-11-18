import styled, { css } from 'styled-components';

export const TextContent = styled.Text<TextContentProps>`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.isDarkMode ? theme.colors.white.default : theme.colors.purple.default};

  ${({ variant }) => variant && css`
    color: ${({ theme }) => theme.colors[variant].default};
  `}
`;

type TextContentProps = {
  variant?: 'white' | 'blue' | 'red';
}

export default TextContent;
