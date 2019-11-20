import React from 'react';

import { Container } from 'common/general';

// import Success from '../Success';
// import Transitions from '../Transitions';
// import UseTransitions from '../UseTransitions';
import TransitioningForm from '../TransitioningForm';

// <Success />
// <Transitions />
// <UseTransitions />

const Step1: React.FC<Step1Props> = () => {
  return (
    <Container>
      <TransitioningForm />
    </Container>
  );
}

type Step1Props = {};

export default Step1;
