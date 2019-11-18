import React from 'react';

import { Container } from 'common/general';

// import Form from '../Form';
// import Success from '../Success';
// import Transitions from '../Transitions';
import UseTransitions from '../UseTransitions';

// <Success />
// <Form />
// <Transitions />

const Step1: React.FC<Step1Props> = () => {
  return (
    <Container>
      <UseTransitions />
    </Container>
  );
}

type Step1Props = {};

export default Step1;
