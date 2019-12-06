import { Transitioning, TransitioningViewProps } from 'react-native-reanimated';
import styled from 'styled-components';

export const OverviewContainer = styled(Transitioning.View)<OverviewContainerProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.isDarkMode
    ? theme.colors.purple.default
    : theme.colors.white.default};
`;

type OverviewContainerProps = TransitioningViewProps;
