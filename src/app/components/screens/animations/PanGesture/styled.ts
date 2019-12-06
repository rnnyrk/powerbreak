import Animated from 'react-native-reanimated';
import styled from 'styled-components';

import { Container } from 'common/general';

export const CardContainer = styled(Container)`
  padding: 0;
`;

export const Card = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.blue.default};
`;
