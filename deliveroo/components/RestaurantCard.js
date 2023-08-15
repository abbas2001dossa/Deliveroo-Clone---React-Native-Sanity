import {Image,TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import StarIcon from '../icons/StarIcon'
import LocationIcon from '../icons/LocationIcon'
import imageUrlBuilder from '@sanity/image-url'
import Client from '../Client';
import {useNavigation} from "@react-navigation/native";

const RestaurantCard = ({
    id , imgUrl , title , rating , genre , address, short_description , dishes , long , lat 
}) => {
  const navigation = useNavigation();
  const builder = imageUrlBuilder(Client);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <TouchableOpacity style={Tw`bg-white shadow mr-3 w-70`} 
      onPress={()=>{
        navigation.navigate('Restaurant',{id , imgUrl , title , rating , genre , address, short_description , dishes , long , lat });
      }}
    >
      <Image
        source={{
          uri:urlFor(imgUrl).url(),
        }}
        style={Tw`h-36 w-70 rounded-sm`}
      >
      </Image>
      <View style={Tw`px-3 pb-4`}>
        <Text style={Tw`font-bold pt-2 text-lg`} > {title}</Text>
        <View style={Tw`flex-row items-center ml-2`}>
          <StarIcon color="green" opacity={0.5} size={22} ></StarIcon>
          <Text style={Tw` text-xs text-gray-500`}> 
            <Text style={Tw`text-green-500`}>  {rating}</Text> .  {genre}
          </Text>
        </View>

        <View style={Tw`ml-2 flex-row items-center`}>
          <LocationIcon color={"gray"} opacity={0.5} size={22} ></LocationIcon>
          <Text style={Tw`text-xs text-gray-500`}>  Nearby .  {address}  </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard