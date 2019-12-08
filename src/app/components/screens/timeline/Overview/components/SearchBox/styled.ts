import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const SearchBoxContainer = styled.View<SearchBoxContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  opacity: ${({ visible }) => visible ? 1 : 0};
`;

type SearchBoxContainerProps = {
  visible: boolean;
}

export const BoxInput = styled.TextInput`
  flex: 1;
  border-radius: 8px;
  margin-right: 8px;
  height: 32px;
  padding: 4px;
  color: ${({ theme }) => theme.colors.purple.dark};
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const BoxView = styled.View`
  flex-direction: row;
  margin: 64px 32px 0;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white.default};
`;

export const BoxButton = styled(RectButton)`
  border-radius: 8px;
  height: 32px;
  padding: 4px 8px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue.default};
`;
