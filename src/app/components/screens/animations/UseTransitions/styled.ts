import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components';

export const UseTransitionsContainer = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 20px;
`;

export const UseTransitionsCardContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const UseTransitionsCard = styled.View<UseTransitionsCardProps>`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.blue.light};

  ${({ cardNumb, theme }) => cardNumb === 0 && css`
    background-color: ${theme.colors.blue.dark};
  `};

  ${({ cardNumb, theme }) => cardNumb === 2 && css`
    background-color: ${theme.colors.blue.default};
  `};
`;

type UseTransitionsCardProps = {
  cardNumb: number;
};
