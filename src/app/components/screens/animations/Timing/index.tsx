import React, { useState } from 'react';
import Animated from 'react-native-reanimated';

import { TimingContainer, Bubble } from './styled';

const { Value } = Animated;

const Timing: React.FC<TimingProps> = () => {
  const progress = new Value(0);

  return (
    <TimingContainer>
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <Bubble
            key={`bubble_${index}`}
          />
        )
      })}
    </TimingContainer>
  );
}

type TimingProps = {};

export default Timing;
