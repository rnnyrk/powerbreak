import React, { useState } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';

import { Container } from 'common/general';

import { Button } from 'common/interaction';
import { TimingContainer, Bubble } from './styled';

const {
  Value,
  interpolate,
  Extrapolate,
  useCode,
  block,
  set,
  and,
  cond,
  not,
  eq,
  Clock,
  stopClock,
  startClock,
  clockRunning,
  timing,
} = Animated;

// A clock is an Animated value which updates itself
// see: https://software-mansion.github.io/react-native-reanimated/timing.html
const runTiming = (clock: Animated.Clock) => {
  const state = {
    // 1 when animation is finished, 0 otherwhise
    finished: new Value(0),
    // current position of the animation 0 .. 0,1 .. 0,2 ...
    position: new Value(0),
    // animation progress in ms
    frameTime: new Value(0),
    // last clock time the animation has evaluated
    time: new Value(0),
  };

  const config = {
    toValue: new Value(1),
    duration: 1000,
    easing: Easing.linear,
  };

  return block([
    timing(clock, state, config),
    cond(eq(state.finished, 1), [
      set(state.finished, 0),
      set(state.frameTime, 0),
      set(state.time, 0),
      set(config.toValue, cond(eq(state.position, 1), 0, 1)),
    ]),
    state.position,
  ]);
};

const Timing: React.FC<TimingProps> = () => {
  const [playing, setPlaying] = useState(false);

  // Every time you press the button this component re-renders
  // which will make those values be re-created as well
  // Use useMemoOne to avoid this behaviour and always have the same reference
  const { isPlaying, progress, clock } = useMemoOne(() => ({
    progress: new Value(0),
    clock: new Clock(),
    isPlaying: new Value(0) as Animated.Value<number>,
  }), []);

  // Make a constant animation value be in sync with component state
  isPlaying.setValue(playing ? 1 : 0);

  useCode(
    () => block([
      cond(and(eq(isPlaying, 0), clockRunning(clock)), stopClock(clock)),
      cond(and(eq(isPlaying, 1), not(clockRunning(clock))), startClock(clock)),
      set(progress, runTiming(clock)),
    ]),
    [],
  );

  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length; // 0.5

  return (
    <Container>
      <TimingContainer>
        {bubbles.map((number) => {
          const start = number * delta; // 0 / 0.5 / 1
          const end = start + delta; // 0.5 / 1 / 1.5

          const scale = interpolate(progress, {
            inputRange: [start, end],
            outputRange: [1, 1.5],
            extrapolate: Extrapolate.CLAMP, // doesn't go outside 1 - 1.5 range
          });

          return (
            <Bubble
              key={`bubble_${number}`}
              style={{
                transform: [{ scale }],
              }}
            />
          );
        })}
      </TimingContainer>
      <Button
        title={playing ? 'Pause' : 'Start'}
        onPress={() => setPlaying(!playing)}
      />
    </Container>
  );
};

type TimingProps = {};

export default Timing;
