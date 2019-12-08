import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableOpacityProperties } from 'react-native';

export const ScrollViewContainer = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding: 32px;
`;

export const ContentItem = styled(TouchableOpacity)<ContentItemProps>`
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 100px;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.purple.light};
  background-color: ${({ theme }) => theme.colors.purple.default};
`;

type ContentItemProps = TouchableOpacityProperties & {};
