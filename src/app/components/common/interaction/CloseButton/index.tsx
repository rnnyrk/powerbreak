import React from 'react';
import * as i from 'types';

import { TextContent } from 'common/typography';

import { TouchableCloseButton } from './styled';

const CloseButton: React.FC<CloseButtonProps> = ({ onPress }) => (
  <TouchableCloseButton onPress={onPress}>
    <TextContent variant="blue">Close</TextContent>
  </TouchableCloseButton>
);

type CloseButtonProps = i.TestProps & {
  onPress?: () => void;
};

export default CloseButton;
