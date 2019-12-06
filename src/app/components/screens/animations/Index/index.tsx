import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Container } from 'common/general';
import { TextContent } from 'common/typography';

import { AnimationLinkItem } from './styled';

const Step1: React.FC<Step1Props> = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <AnimationLinkItem onPress={() => navigation.navigate('Success')}>
        <TextContent variant="white">Success</TextContent>
      </AnimationLinkItem>

      <AnimationLinkItem onPress={() => navigation.navigate('TransitioningForm')}>
        <TextContent variant="white">TransitioningForm</TextContent>
      </AnimationLinkItem>

      <AnimationLinkItem onPress={() => navigation.navigate('Transitions')}>
        <TextContent variant="white">Transitions</TextContent>
      </AnimationLinkItem>

      <AnimationLinkItem onPress={() => navigation.navigate('UseTransitions')}>
        <TextContent variant="white">UseTransitions</TextContent>
      </AnimationLinkItem>

      <AnimationLinkItem onPress={() => navigation.navigate('Timing')}>
        <TextContent variant="white">Timing</TextContent>
      </AnimationLinkItem>
    </Container>
  );
};

type Step1Props = {};

export default Step1;
