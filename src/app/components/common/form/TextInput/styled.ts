import styled from 'styled-components';

export const TextInputField = styled.TextInput`
  width: 100%;
  padding: 16px;
  color: ${({ theme }) => theme.colors.purple.dark};
  background: ${({ theme }) => theme.colors.white};
`;