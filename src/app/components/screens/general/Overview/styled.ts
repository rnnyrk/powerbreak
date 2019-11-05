import styled from 'styled-components';
import { TransitioningViewProps } from 'react-native-reanimated';

export const OverviewContainer = styled.View<OverviewContainerProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple.default};
`;

type OverviewContainerProps = TransitioningViewProps;