import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.purple.default};
`;

export default Container;
