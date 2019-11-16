import React, { useState, useRef } from 'react';
import Animated, { Transition, TransitioningView } from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';

import { Button } from 'common/interaction';

import { TransitionsContainer, TransitionsCard, CardContainer } from './styled';
const {
  Value,
  set,
  cond,
  not,
  block,
  add,
  eq,
  Clock,
  clockRunning,
  stopClock,
  startClock,
  Extrapolate,
  interpolate,
  useCode,
} = Animated;

const layouts: VariantProps[] = ['column', 'row', 'wrap'];

const transition = (
  <Transition.Change durationMs={400} interpolation="easeInOut" />
);

const Transitions: React.FC<TransitionsProps> = () => {
  const ref = useRef<TransitioningView>(null);
  const [state, setState] = useState<VariantProps>('column');

  return (
    <TransitionsContainer>
      <CardContainer
        variant={state}
        {...{ ref, transition }}
      >
        <TransitionsCard variant={state} />
        <TransitionsCard variant={state} />
        <TransitionsCard variant={state} />
      </CardContainer>

      {layouts.map((item) => {
        return (
          <Button
            key={item}
            title={item}
            variant={state === item ? 'primary' : 'secondary'}
            onPress={() => {
              if (ref.current) {
                ref.current.animateNextTransition();
              }

              setState(item)
            }}
          />
        )
      })}

    </TransitionsContainer>
  );
}

type VariantProps = 'column' | 'row' | 'wrap';;

type TransitionsProps = {};

export default Transitions;
