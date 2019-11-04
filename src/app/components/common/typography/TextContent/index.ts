import styled from 'styled-components';

export const TextContent = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export default TextContent;
