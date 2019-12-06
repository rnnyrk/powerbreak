import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const CardContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.blue.light};
`;
