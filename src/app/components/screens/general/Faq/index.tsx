import React from 'react';
import { ScrollView } from 'react-native';

import theme from 'styles/theme';
import { Container } from 'common/general';
import { Accordion } from 'common/interaction';

const Faq: React.FC<FaqProps> = () => (
  <ScrollView style={{ backgroundColor: theme.colors.purple.default }}>
    <Container testID="faqModal">
      {Array.from({ length: 25 }).map((_, index) => (
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
