import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftIcon = ({ color, size }) => {
  return (
    <View style={{ width: size, height: size }}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={color}
        fill="none"
      >
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </Svg>
    </View>
  );
};

export default ArrowLeftIcon;
