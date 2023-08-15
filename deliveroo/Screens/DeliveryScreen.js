import {Image, View, Text ,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {  useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import XcircleIcon from '../icons/XcircleIcon';
import * as Progress from "react-native-progress";
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';


const DeliveryScreen = () => {

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (

    <View style={Tw`flex-1 bg-[#00CCBB] pt-5`}>
      
      <SafeAreaView style={Tw` z-50`}>
        
        <View style={Tw`flex-row justify-between items-center p-5`}>
          <TouchableOpacity onPress={()=> navigation.navigate("Home")} >
            <XcircleIcon color={"#00CCBB"} size={40}></XcircleIcon>
          </TouchableOpacity>
          <Text style={Tw`font-light text-lg text-white`}> Order Help </Text>
        </View>

        <View style={Tw`bg-white mx-5 my-2 rounded-lg shadow-lg z-50 p-6`}>
          
          <View style={Tw`flex-row justify-between`}>
            <View style={Tw``}>
              <Text style={Tw`text-lg text-gray-400`}> Estimated Arrival </Text>
              <Text style={Tw`text-4xl font-bold`}> 45-55 minutes </Text>
            </View>
            <Image
              source={{
                uri:"https://links.papareact.com/fls",
              }}
              style={Tw`h-20 w-20`}
            ></Image>
          </View>

          {/* progressbar */}
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true}></Progress.Bar>
          <Text style={Tw`text-gray-500 mt-3`}>
            Your order at <Text style={Tw`text-black font-bold`}> {restaurant.title}</Text> is being prepared 
          </Text>
        </View>
      </SafeAreaView>


      {/* react native maps  */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType='mutedStandard'
        style={Tw`flex-1 mt-0 z-0 `}
      
      >  
        <Marker
          coordinate={{
            latitude:restaurant.lat,longitude:restaurant.long
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier='origin'
          pinColor='#00CCBB'
        >
        </Marker>

      </MapView>
      
      <SafeAreaView style={Tw`bg-white items-center flex-row h-20 shadow-lg`}>
        <Image
          source={{
            uri:"https://links.papareact.com/wru"
          }}
          style={Tw`bg-gray-300 h-12 w-12 p-4 rounded-full ml-5`}
        >
        </Image>

        <View style={Tw`flex-1 p-4 flex-col`}>
          <Text style={Tw`text-lg font-bold`}>
            Bilal Ahmed 
          </Text>
          <Text style={Tw`text-gray-400`}>
            Your Rider
          </Text>
        </View>

        <Text style={Tw`text-[#00CCBB] text-lg mr-5 font-bold`}> Call </Text>  


      </SafeAreaView>
    
    </View>

  )
}


export default DeliveryScreen