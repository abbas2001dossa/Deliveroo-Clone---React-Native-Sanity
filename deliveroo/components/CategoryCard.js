import {TouchableOpacity, Image,View, Text } from 'react-native'
import React from 'react'
import Tw from 'twrnc';

const CategoryCard = ({ imgUrl , title}) => {
  return (
    <TouchableOpacity style={Tw`mr-2 relative `}>
      
      <Image source={{
        uri: imgUrl,
      }}
      style={Tw`h-20 w-20 rounded `}
      ></Image>

      <Text style={Tw`absolute shadow bottom-1 left-1 text-white font-bold`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard