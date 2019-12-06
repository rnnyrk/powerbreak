import styled from 'styled-components';

export const AnimationLinkItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.purple.light};
`;
