import React from 'react';
import { Svg, Path } from 'react-native-svg';

const ArrowRightIcon = ({ size , color  }) => {
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
      <Path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </Svg>
  );
};

export default ArrowRightIcon;
