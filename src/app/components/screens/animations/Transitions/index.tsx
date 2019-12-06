import React, { useState, useRef } from 'react';
import { Transition, TransitioningView } from 'react-native-reanimated';

import { Container } from 'common/general';
import { Button } from 'common/interaction';

import { TransitionsContainer, TransitionsCard, CardContainer } from './styled';

const layouts: VariantProps[] = ['column', 'row', 'wrap'];

const transition = (
  <Transition.Change durationMs={400} interpolation="easeInOut" />
);

const Transitions: React.FC<TransitionsProps> = () => {
  const ref = useRef<TransitioningView>(null);
  const [state, setState] = useState<VariantProps>('column');

  return (
    <Container>
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
                setState(item);
              }}
            />
          );
        })}
      </TransitionsContainer>
    </Container>
  );
};

type VariantProps = 'column' | 'row' | 'wrap';

type TransitionsProps = {};

export default Transitions;
