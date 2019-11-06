import React from 'react';
import { useRoute } from '@react-navigation/core';
import * as i from 'types';

import { Container } from 'common/general';
import { TextContent } from 'common/typography';

const Detail: React.FC<DetailProps> = () => {
  const route = useRoute<i.DetailScreenRouteProp>();
  const { id } = route.params;

  return (
    <Container>
      <TextContent>Detail for page with id; {id}</TextContent>
    </Container>
  );
};

type DetailProps = {};

export default Detail;
