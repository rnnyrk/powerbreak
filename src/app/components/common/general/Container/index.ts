import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100%;
  background-color: ${({ theme }) => theme.isDarkMode
    ? theme.colors.purple.default
    : theme.colors.white.default};
`;

export default Container;
