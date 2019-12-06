import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useTransition } from 'react-native-redash';
import Animated from 'react-native-reanimated';

import { Container } from 'common/general';
import { Button } from 'common/interaction';

import {
  UseTransitionsContainer, UseTransitionsCard, UseTransitionsCardContainer,
} from './styled';

const { width } = Dimensions.get('window');
const transformOrigin = -1 * (width / 2 - 64);
const { not, multiply, interpolate, concat } = Animated;

const UseTransitions: React.FC<UseTransitionsProps> = () => {
  const [toggle, setToggle] = useState<0 | 1>(1);
  const transition = useTransition(toggle, not(toggle), toggle);

  return (
    <Container>
      <UseTransitionsContainer>
        {Array.from({ length: 3 }).map((_, index) => {
          let direction = 0;
          if (index === 0) {
            direction = -1;
          } else if (index === 2) {
            direction = 1;
          }

          // You can't use * / + - etc. since those live on the JS thread
          // instead use reanimated functions to sum since that's UI thread
          const rotate = multiply(direction, interpolate(transition, {
            inputRange: [0, 1],
            outputRange: [0, 30],
          }));

          return (
            <UseTransitionsCardContainer
              key={`card_${index}`}
              style={{
                transform: [
                  { translateX: transformOrigin },
                  // Same goes for concat instead of `${rotate}deg`
                  { rotate: concat(rotate, 'deg') },
                  { translateX: -transformOrigin },
                ],
              }}
            >
              <UseTransitionsCard cardNumb={index} />
            </UseTransitionsCardContainer>
          );
        })}

        <Button
          title={toggle ? 'Open' : 'Close'}
          onPress={() => setToggle(toggle ^ 1)}
        />
      </UseTransitionsContainer>
    </Container>
  );
};

type UseTransitionsProps = {};

export default UseTransitions;
