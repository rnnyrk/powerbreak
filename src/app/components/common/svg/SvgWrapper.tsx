import React from 'react';
import Svg from 'react-native-svg';
import styled from 'styled-components';

const IconWrapper = styled.View`
  display: flex;
  justify-content: center;
`;

const SvgWrapper: React.FC<SvgWrapperProps> = ({
  children, width, height, viewBox, fill,
}) => (
  <IconWrapper>
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
    >
      {React.cloneElement(children, { fill })}
    </Svg>
  </IconWrapper>
);

type SvgWrapperProps = {
  children: any;
  height: number;
  width: number;
  fill: string;
  viewBox: string;
};

export default SvgWrapper;
