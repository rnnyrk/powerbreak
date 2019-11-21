import React, { useState } from 'react';
import { useTransition } from 'react-native-redash';
import Animated from 'react-native-reanimated';

import { TextContent } from 'common/typography';

import { TimingContainer } from './styled';

const Timing: React.FC<TimingProps> = () => {

  return (
    <TimingContainer>
      <TextContent>Timing</TextContent>
    </TimingContainer>
  );
}

type TimingProps = {};

export default Timing;
