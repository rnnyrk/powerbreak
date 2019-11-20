import styled from 'styled-components';
import { Transitioning } from 'react-native-reanimated';

export const TransitioningFormContainer = styled(Transitioning.View)`
  width: 100%;
`;

export const OverlayCard = styled.View`
  position: absolute;
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const OverlayContent = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 90%;
  height: 300px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.blue.default};
`;
