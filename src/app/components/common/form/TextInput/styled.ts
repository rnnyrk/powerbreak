import styled from 'styled-components';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export const TextInputField = styled.TextInput<TextInputFieldProps>`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.purple.dark};
  background: ${({ theme }) => theme.colors.white.default};
`;

type TextInputFieldProps = {
  name: string;
  onBlur: (event?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChange: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus: (event?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  type?: string;
  value: string;
  checked?: boolean;
  multiple?: boolean;
}