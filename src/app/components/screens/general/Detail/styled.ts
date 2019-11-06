import styled from 'styled-components';

export const ShareWrapper = styled.View`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.colors.blue.default};
`;