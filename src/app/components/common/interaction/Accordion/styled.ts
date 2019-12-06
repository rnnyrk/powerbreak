import Animated from 'react-native-reanimated';
import styled from 'styled-components';

import { TextContent } from 'common/typography';

export const AccordionContainer = styled.View`
  min-width: 100%;
  margin-bottom: 16px;
  border-radius: 4px;
  overflow: hidden;
`;

export const AccordionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.purple.light};
`;

export const AccordionContent = styled(Animated.View)`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.purple.light};
`;

// type AccordionContentProps = {
//   height: AnimatedNode<number>;
// };

export const AccordionItem = styled(TextContent)`
  width: 100%;
  padding: 16px;
`;

export const IconWrapper = styled(Animated.View)`
  height: 25px;
  width: 25px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
