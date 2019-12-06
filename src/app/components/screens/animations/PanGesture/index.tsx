import React, { useRef, useEffect, useState } from 'react';
import { ViewComponent } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { onGestureEvent, clamp } from 'react-native-redash';

import { CardContainer, Card } from './styled';

const CARD_WIDTH = 200;
const CARD_HEIGHT = 200;

const { Value, block, cond, eq, set, add } = Animated;

const withOffset = (value: Animated.Value<number>, state: Animated.Value<State>) => {
  const offset = new Value(0); // last position of the card

  return cond(
    eq(state, State.END),
    [set(offset, add(offset, value)), offset],
    add(offset, value),
  );
};

const PanGesture: React.FC<PanGestureProps> = () => {
  const ref = useRef<ViewComponent>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

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

  useEffect(() => {
    if (ref.current) {
      console.log('ref', ref.current);
    }
  }, [ref]);

  // get CardContainer height and width
  const containerWidth = 0;
  const containerHeight = 0;

  const translateX = clamp(withOffset(translationX, state), 0, containerWidth - CARD_WIDTH);
  const translateY = clamp(withOffset(translationY, state), 0, containerHeight - CARD_HEIGHT);

  return (
    <CardContainer ref={ref}>
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
