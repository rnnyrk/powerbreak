import React from 'react';
import * as i from 'types';

import { TextContent } from 'common/typography';

import { TouchableBackButton } from './styled';

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => (
  <TouchableBackButton onPress={onPress}>
    <TextContent>Terug</TextContent>
  </TouchableBackButton>
);

type BackButtonProps = i.TestProps & {
  onPress?: () => void;
};

export default BackButton;
