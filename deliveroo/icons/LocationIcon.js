import {View} from 'react-native'
import { Svg, Path } from 'react-native-svg';


const LocationIcon = ({ size , color , opacity  }) => {
    return (
      <View>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          // fill={color}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={color}
          opacity={opacity}
        >
          <Path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <Path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </Svg>
      </View>
    );
  };
  
  export default LocationIcon;
  