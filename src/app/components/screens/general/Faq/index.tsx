import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from 'common/general';
import { Accordion } from 'common/interaction';

const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

const Faq: React.FC<FaqProps> = () => (
  <ScrollView>
    <Container>
      {Arr.map((index) => (
        <Accordion
          key={`accrodion_${index}`}
          title={`Question ${index}`}
        />
      ))}
    </Container>
  </ScrollView>
);

type FaqProps = {};

export default Faq;
