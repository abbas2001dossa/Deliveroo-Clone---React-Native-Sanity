import React from 'react';
import { Svg, Path } from 'react-native-svg';

const XcircleIcon = ({ size, color }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    stroke={"white"}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </Svg>
);

export default XcircleIcon;
