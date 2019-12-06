import React, { useState } from 'react';
import Animated from 'react-native-reanimated';

import { TimingContainer, Bubble } from './styled';

const {
  Value,
  interpolate,
  Extrapolate,
  useCode,
  block,
  set,
  stopClock,
  startClock,
  clockRunning,
} = Animated;

const Timing: React.FC<TimingProps> = () => {
  const progress = new Value(0);

  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length;

  return (
    <TimingContainer>
      {bubbles.map((index) => {
        const start = index * delta;
        const end = start + delta;

        const scale = interpolate(progress, {
          inputRange: [start, end],
          outputRange: [1, 1.5],
          extrapolate: Extrapolate.CLAMP,
        });

        return (
          <Bubble
            key={`bubble_${index}`}
            style={{ transform: [{ scale }] }}
          />
        );
      })}
    </TimingContainer>
  );
};

type TimingProps = {};

export default Timing;
