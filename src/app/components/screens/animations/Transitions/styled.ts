import { Dimensions } from 'react-native';
import Animated, { Transitioning } from 'react-native-reanimated';
import styled, { css } from 'styled-components';

const { width } = Dimensions.get('window');

export const TransitionsContainer = styled.View`
  width: 100%;
  flex: 1;
  padding: 0;
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
  padding: 0;

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
