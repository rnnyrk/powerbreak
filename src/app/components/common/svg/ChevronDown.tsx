import React from 'react';
import { Path } from 'react-native-svg';

import SvgWrapper from './SvgWrapper';

const ChevronDown: React.FC<ChevronDownProps> = (props) => (
  <SvgWrapper {...props} viewBox="0 0 411 411">
    <Path
      d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
      c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
      c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
    />
  </SvgWrapper>
);

type ChevronDownProps = {
  fill: string;
  height: number;
  width: number;
};

export default ChevronDown;
