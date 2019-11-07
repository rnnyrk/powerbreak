import styled, { css } from 'styled-components';

export const TextContent = styled.Text<TextContentProps>`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white.default};

  ${({ variant }) => variant !== 'default' && css`
    color: ${({ theme }) => theme.colors[variant || 'white'].default};
  `}
`;

type TextContentProps = {
  variant?: 'default' | 'blue' | 'red';
}

export default TextContent;
