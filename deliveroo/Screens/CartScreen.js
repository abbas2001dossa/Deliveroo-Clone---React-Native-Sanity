import {Image, View, Text } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import Tw from 'twrnc';
import {  useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useState ,useEffect} from 'react';
import { useMemo } from 'react';
import {TouchableOpacity, SafeAreaView , ScrollView } from 'react-native';
import XcircleIcon from '../icons/XcircleIcon';
import imageUrlBuilder from '@sanity/image-url';
import Client from '../Client';

const CartScreen = () => {
    const navigation = useNavigation();
    const restaurant =useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const [GroupedItemsInBasket , setGroupedItemsInBasket]= useState([]);
    const basketTotal= useSelector(selectBasketTotal);
    // useEffect(() => {
    //   console.log(restaurant);
    // }, [restaurant]);
    const builder = imageUrlBuilder(Client);
    function urlFor(source) {
      return builder.image(source);
    }

   

    useEffect(() => {
        const groupedItems = items.reduce((results,item)=>{
            (results[item.id]= results[item.id] || []).push(item);
            return results;
        },{});

        setGroupedItemsInBasket(groupedItems);console.log(groupedItems);
    },[items]);

  return (
    <SafeAreaView style={Tw`flex-1 bg-white mt-15 ml-4 mr-4 rounded-lg`}> 
      <View style={Tw`flex-1 bg-gray-100`}>
        <View style={Tw`p-5 border border-[#00CCBB] bg-white shadow-lg`}>
          
          <View style={Tw``}>
            <Text style={Tw`text-lg font-bold text-center`}> Basket </Text>
            <Text style={Tw`text-center text-gray-400`}>
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity onPress={navigation.goBack} 
            style={Tw`rounded-full absolute top-3 right-5`}
          >
            <XcircleIcon size={50} color={"#00CCBB"} ></XcircleIcon>
          </TouchableOpacity>

        </View>

        <View style={Tw`flex-row items-center px-4 py-3 bg-white my-5`}>
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
              
            }}
            style={Tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          ></Image>
          <Text style={Tw`flex-1 mx-2`}> Deliver in 50-70 min </Text>
          <TouchableOpacity>
            <Text style={Tw`text-[#00CCBB]`}> Change </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={Tw``} >
          {Object.entries(GroupedItemsInBasket).map(([key,items])=>(
            <View key={key} style={Tw`flex-row items-center bg-white py-2 px-5 my-1 rounded-lg`}>
              <Text style={Tw`text-[#00CCBB]`}>{items.length}  x  </Text>
              <Image source={{ uri: urlFor(items[0].image).url() }}
                style={Tw`h-12 w-12 rounded-full`}
              >
              </Image>
              <Text style={Tw`flex-1`}> { items[0]?.name}</Text>
              <Text style={Tw`text-gray-600 mx-3`}>PKR {items[0]?.price}</Text>

              <TouchableOpacity>
                <Text style={Tw`text-xs text-[#00CCBB]`}  onPress={()=> dispatch(removeFromBasket({id : key }))}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={Tw`p-5 bg-white mt-5 shadow-lg rounded`}>
          
          <View style={Tw`flex-row justify-between p-2`}>
            <Text style={Tw`text-gray-400`}> Subtotal </Text>
            <Text style={Tw`text-gray-400`}> PKR {basketTotal}</Text>
          </View>

          <View style={Tw`flex-row justify-between p-2`}>
            <Text style={Tw`text-gray-400`}> Delivery Fee </Text>
            <Text style={Tw`text-gray-400`}>PKR {200}</Text>
          </View>

          <View style={Tw`flex-row justify-between p-2  border-t`}>
            <Text style={Tw`text-gray-400 text-black`}> Order Total  </Text>
            <Text style={Tw`text-gray-400 text-black`}> PKR {basketTotal+ 200}</Text>
          </View>

          <TouchableOpacity style={Tw`rounded-lg bg-[#00CCBB] p-4 `} onPress={()=>navigation.navigate('PreparingOrder')}>
            <Text style={Tw`text-center text-white text-lg  `}> Place Order </Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default CartScreen;