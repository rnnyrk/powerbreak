import React, { useState, useCallback, memo } from 'react';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { verticalPanGestureHandler, snapPoint } from 'react-native-redash';
import { useNavigation } from '@react-navigation/core';
import { useMemoOne } from 'use-memo-one';
import Animated from 'react-native-reanimated';

import { Content, ContentItem, ScrollViewContainer } from './styled';
import { TextContent } from 'common/typography';

import { THRESHOLD } from '../Trigger';
import data from './data';

const {
  SpringUtils,
  and,
  abs,
  add,
  lessOrEq,
  greaterOrEq,
  eq,
  multiply,
  decay,
  cond,
  block,
  Clock,
  startClock,
  call,
  Value,
  set,
  neq,
  not,
  useCode,
  spring,
  sub,
  pow,
  diff,
  min,
  divide,
} = Animated;

const friction = (ratio: Animated.Node<number>) =>
  multiply(0.52, pow(sub(1, ratio), 2));

type WithScrollParams = {
  translationY: Animated.Value<number>;
  velocityY: Animated.Value<number>;
  state: Animated.Value<State>;
  containerHeight: number;
  contentHeight: number;
};

const withScroll = ({
  translationY, velocityY, state: gestureState, containerHeight, contentHeight,
}: WithScrollParams) => {
  const clock = new Clock();
  const delta = new Value(0);
  const isSpringing = new Value(0);

  const state = {
    time: new Value(0),
    position: new Value(0),
    velocity: new Value(0),
    finished: new Value(0),
  };

  const upperBound = 0;
  const lowerBound = -1 * (contentHeight - containerHeight);
  const isInBound = and(
    lessOrEq(state.position, upperBound),
    greaterOrEq(state.position, lowerBound),
  );

  const config = {
    ...SpringUtils.makeDefaultConfig(),
    toValue: new Value(0),
  };

  const overscroll = sub(
    state.position,
    cond(greaterOrEq(state.position, 0), upperBound, lowerBound),
  );

  return block([
    startClock(clock),
    set(delta, diff(translationY)),
    cond(
      eq(gestureState, State.ACTIVE),
      [
        set(isSpringing, 0),
        set(
          state.position,
          add(
            state.position,
            cond(
              isInBound,
              delta,
              multiply(
                delta,
                friction(min(divide(abs(overscroll), containerHeight), 1)),
              ),
            ),
          ),
        ),
        set(state.velocity, velocityY),
        set(state.time, 0),
      ],
      [
        set(translationY, 0),
        cond(
          and(isInBound, not(isSpringing)),
          [decay(clock, state, { deceleration: 0.997 })],
          [
            set(isSpringing, 1),
            set(
              config.toValue,
              snapPoint(state.position, state.velocity, [
                lowerBound,
                upperBound,
              ]),
            ),
            spring(clock, state, config),
          ],
        ),
      ],
    ),
    state.position,
  ]);
};

export default memo(({ translateY, onPull }: ScrollViewProps) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const navigation = useNavigation();

  const { gestureHandler, translationY, velocityY, state } = useMemoOne(
    () => verticalPanGestureHandler(),
    [],
  );

  useCode(
    () => block([
      set(
        translateY,
        withScroll({
          translationY,
          velocityY,
          state,
          containerHeight,
          contentHeight,
        }),
      ),
      cond(
        and(greaterOrEq(translateY, THRESHOLD), neq(state, State.ACTIVE)),
        call([], onPull),
      ),
    ]),
    [containerHeight, contentHeight, onPull],
  );

  const onLayoutContainer = useCallback((event) => {
    const height = event.nativeEvent.layout.height;
    setContainerHeight(height);
  }, []);

  const onLayoutContent = useCallback((event) => {
    const height = event.nativeEvent.layout.height;
    setContentHeight(height);
  }, []);

  return (
    <ScrollViewContainer onLayout={onLayoutContainer}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          onLayout={onLayoutContent}
          style={{ transform: [{ translateY }] }}
        >
          <Content>
            {data.map((item, index) => (
              <ContentItem
                key={item.key}
                onPress={() => navigation.navigate('Detail', { id: index })}
              >
                <TextContent>{item.title}</TextContent>
              </ContentItem>
            ))}
          </Content>
        </Animated.View>
      </PanGestureHandler>
    </ScrollViewContainer>
  );
});

type ScrollViewProps = {
  translateY: Animated.Value<number>;
  onPull: () => void;
};
