import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const TimingContainer = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 80px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Bubble = styled(Animated.View)`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white.default};
`;
