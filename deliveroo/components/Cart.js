import {TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems , selectBasketTotal } from '../features/basketSlice';
import {useNavigation} from '@react-navigation/native';
import Tw from 'twrnc';

const Cart = () => {
    const navigation =useNavigation();
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const pressed =()=>{
        navigation.navigate(Cart);
    }

    if(items.length === 0) return null ; 
  return (
    <View style={Tw`absolute w-full bottom-10 z-50`}>
      <TouchableOpacity onPress={pressed} style={Tw`bg-[#00CCBB] mx-5 flex-row p-4 rounded-lg items-center`}>
        <Text style={Tw`text-white font-extrabold text-lg bg-[#01A296] py-1 px-2`}>{items.length}</Text>
        <Text style={Tw`flex-1 text-white font-extrabold text-lg text-center `}> View Cart </Text>
        <Text style={Tw`text-lg font-extrabold text-white`}> PKR {basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cart;