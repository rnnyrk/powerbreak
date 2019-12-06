import Animated from 'react-native-reanimated';
import styled from 'styled-components';

export const TriggerContainer = styled.View<TriggerContainerProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ height }) => -height};
  justify-content: center;
  align-items: center;
`;

type TriggerContainerProps = {
  height: number;
};

export const SearchContainer = styled(Animated.View)`
  width: 125px;
  height: 48px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
