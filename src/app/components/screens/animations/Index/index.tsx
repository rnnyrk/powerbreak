import React from 'react';

import { Container } from 'common/general';

// import Success from '../Success';
// import Transitions from '../Transitions';
// import UseTransitions from '../UseTransitions';
// import TransitioningForm from '../TransitioningForm';
import Timing from '../Timing';

const Step1: React.FC<Step1Props> = () => {
  return (
    <Container>
      <Timing />
    </Container>
  );
}

type Step1Props = {};

export default Step1;
