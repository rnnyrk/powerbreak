import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Container } from 'common/general';
import { TextContent } from 'common/typography';

import { AnimationLinkItem } from './styled';

const Index: React.FC<IndexProps> = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <AnimationLinkItem onPress={() => navigation.navigate('Success')}>
        <TextContent>Success</TextContent>
      </AnimationLinkItem>

      <AnimationLinkItem onPress={() => navigation.navigate('TransitioningForm')}>
        <TextContent>TransitioningForm</TextContent>
      </AnimationLinkItem>

      <AnimationLinkItem onPress={() => navigation.navigate('Transitions')}>
        <TextContent>Transitions</TextContent>
      </AnimationLinkItem>

      <AnimationLinkItem onPress={() => navigation.navigate('UseTransitions')}>
        <TextContent>UseTransitions</TextContent>
      </AnimationLinkItem>

      <AnimationLinkItem onPress={() => navigation.navigate('Timing')}>
        <TextContent>Timing</TextContent>
      </AnimationLinkItem>

      <AnimationLinkItem onPress={() => navigation.navigate('PanGesture')}>
        <TextContent>PanGesture</TextContent>
      </AnimationLinkItem>
    </Container>
  );
};

type IndexProps = {};

export default Index;
