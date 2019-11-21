import styled from 'styled-components';
import Animated from 'react-native-reanimated';

export const SuccessContainer = styled.View`
  position: absolute;
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SuccessContent = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.blue.default};
`;