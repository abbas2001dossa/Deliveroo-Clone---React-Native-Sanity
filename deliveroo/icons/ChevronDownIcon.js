import React from 'react';
import { Svg, Path } from 'react-native-svg';

const ChevronDownIcon = ({ size, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </Svg>
  );
};

export default ChevronDownIcon;
