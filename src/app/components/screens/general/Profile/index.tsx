import React from 'react';

import { Container } from 'common/general';
import { TextContent } from 'common/typography';

const Profile: React.FC<ProfileProps> = () => (
  <Container>
    <TextContent>Profile</TextContent>
  </Container>
);

type ProfileProps = {};

export default Profile;
