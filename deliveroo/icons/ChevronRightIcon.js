import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ChevronRightIcon = ({ color, size }) => {
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
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </Svg>
    </View>
  );
};

export default ChevronRightIcon;
