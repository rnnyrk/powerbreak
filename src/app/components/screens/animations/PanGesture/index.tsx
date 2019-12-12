import React from 'react';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { onGestureEvent, clamp } from 'react-native-redash';

import { CardContainer, Card } from './styled';

const CARD_WIDTH = 200;
const CARD_HEIGHT = 200;

const { width, height } = Dimensions.get('window');
const containerWidth = width;
const containerHeight = height;

const { Value, cond, eq, set, add, diffClamp } = Animated;

const withOffset = (value: Animated.Value<number>, state: Animated.Value<State>) => {
  const offset = new Value(0); // last position of the card

  return cond(
    eq(state, State.END),
    [set(offset, add(offset, value)), offset],
    add(offset, value),
  );
};

const PanGesture: React.FC<PanGestureProps> = () => {
  const state = new Value(State.UNDETERMINED);
  const translationX = new Value(0);
  const translationY = new Value(0);

  // onGestureEvent from redash is a shortcut to event from gesture-handler
  // and prevents you from having to set onGestureEvent and
  // onHandlerStateChange on the PanGestureHandler
  const gestureHandler = onGestureEvent({
    state,
    translationY,
    translationX,
  });

  const translateX = diffClamp(withOffset(translationX, state), -85, (containerWidth - CARD_WIDTH - 85));
  const translateY = diffClamp(withOffset(translationY, state), -211, (containerHeight - CARD_HEIGHT - 401));

  return (
    <CardContainer>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={{
          transform: [{ translateX }, { translateY }],
        }}>
          <Card />
        </Animated.View>
      </PanGestureHandler>
    </CardContainer>
  );
};

type PanGestureProps = {};

export default PanGesture;
