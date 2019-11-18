import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';

import { TextContent } from 'common/typography';
import { Button } from 'common/interaction';

import { SuccessContainer, SuccessContent } from './styled';
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
const duration = 2000;

const Success: React.FC<SuccessProps> = () => {
  const [show, setShow] = useState(false);

  // Clock is a animtion value which updates automatically over frames
  // By default Clock is just a value which doesn't update
  // startClock(); when you start a clock the value of the clock will update each frame
  // stopClock(); stop updating (pause or stop animation)
  // clockRunning(); detect if clock is running

  // Normal const values are re-created every render
  // useMemoOne() presist the value during re-renders
  // the normal useMemo() doesn't garuntee that identity always stays the same
  const { time, clock, progress } = useMemoOne(() => ({
    clock: new Clock(),
    time: new Value(0),
    progress: new Value(0),
   }), []);

  const opacity = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: show ? [0, 1] : [1, 0],
    extrapolate: Extrapolate.CLAMP,  // output doesn't go outside 0 - 1
  });

  // declare animation instruction for every frame (is you don't pass a dependency)
  useCode(
    block([
      // 1. if clock not running
      // start the clock and save original clock value in time
      cond(not(clockRunning(clock)), [
        startClock(clock),
        set(time, clock),
      ]),
      // 2. calculate progress of animation based on the clock (current time in animation)
      set(progress, interpolate(clock, {
        inputRange: [time, add(time, duration)], // at 0 value of clock is time // at 1 it's time (0) + duration
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP,
      })),
      // 3. if animation is over (if progress === 1), stop the clock
      cond(eq(progress, 1), stopClock(clock)),
    ]),
    [],
  );

  return (
    <SuccessContainer>
      <SuccessContent style={{ opacity }}>
        <TextContent>Success</TextContent>
      </SuccessContent>

      <Button title={show ? 'Hide' : 'Show'} onPress={() => setShow((prev) => !prev)} />
    </SuccessContainer>
  );
}

type SuccessProps = {};

export default Success;
