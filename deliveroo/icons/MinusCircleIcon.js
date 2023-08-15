import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const MinusCircleIcon = ({ color, size }) => {
  return (
    <View style={{ width: size, height: size }}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={"white"}
        fill={color}
      >
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </Svg>
    </View>
  );
};

export default MinusCircleIcon;
