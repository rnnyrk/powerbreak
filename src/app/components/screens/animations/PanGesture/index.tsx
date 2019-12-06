import React, { useState } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';

import { Container } from 'common/general';
import { TextContent } from 'common/typography';

import { CardContainer, Card } from './styled';

const PanGesture: React.FC<PanGestureProps> = () => {
  return (
    <Container>
      <TextContent>PanGesture</TextContent>
    </Container>
  );
};

type PanGestureProps = {};

export default PanGesture;
