import styled, { css } from 'styled-components';
import { Dimensions } from 'react-native';
import Animated, { Transitioning } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export const TransitionsContainer = styled.View`
  width: 100%;
  flex: 1;
`;

export const TransitionsCard = styled(Animated.View)<CardProps>`
  flex: 1;
  margin: 10px;
  height: 100px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.blue.default};

  ${(props) => props.variant === 'wrap' && css`
    flex: none;
    width: ${width / 2 - 60};
  `};
`;

export const CardContainer = styled(Transitioning.View)<CardProps>`
  width: 100%;
  flex: 2;

  ${(props) => props.variant === 'row' && css`
    flex-direction: row;
    align-items: center;
  `};

  ${(props) => props.variant === 'wrap' && css`
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

type CardProps = {
  variant?: 'column' | 'row' | 'wrap';
};