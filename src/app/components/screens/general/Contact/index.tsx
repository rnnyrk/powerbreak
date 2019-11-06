import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from 'common/general';
import { TextContent } from 'common/typography';

const Contact: React.FC<ContactProps> = () => (
  <ScrollView>
    <Container>
      <TextContent>Contact</TextContent>
    </Container>
  </ScrollView>
);

type ContactProps = {};

export default Contact;
