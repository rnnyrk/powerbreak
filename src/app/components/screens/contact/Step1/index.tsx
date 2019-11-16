import React from 'react';

import { Container } from 'common/general';

import Form from '../Form';
import Success from '../Success';
import Transitions from '../Transitions';

const Step1: React.FC<Step1Props> = () => {
  return (
    <Container>
      {/* <Success /> */}
      <Transitions />
      {/* <Form /> */}
    </Container>
  );
}

type Step1Props = {};

export default Step1;
