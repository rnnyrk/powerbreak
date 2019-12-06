import React, { useState, useRef, memo } from 'react';
import { useMemoOne } from 'use-memo-one';
import Animated, { TransitioningView, Transition } from 'react-native-reanimated';

import { ScrollView, SearchBox, Trigger } from './components';
import { OverviewContainer } from './styled';

const { Value } = Animated;

const transition = (
  <Transition.Together>
    <Transition.In durationMs={200} type="scale" />
    <Transition.Out durationMs={200} type="scale" />
  </Transition.Together>
);

export default memo(() => {
  const ref = useRef<TransitioningView>(null);
  const [search, setSearch] = useState(false);

  const translateY = useMemoOne(() => new Value(0), []);

  return (
    <OverviewContainer {...{ transition, ref }}>
      <Trigger {...{ translateY }} />
      <ScrollView
        {...{ translateY }}
        onPull={() => {
          if (ref.current) {
            ref.current.animateNextTransition();
          }
          setSearch(true);
        }}
      />
      <SearchBox visible={search} onRequestClose={() => {
        if (ref.current) {
          ref.current.animateNextTransition();
        }
        setSearch(false);
      }} />
    </OverviewContainer>
  );
});
