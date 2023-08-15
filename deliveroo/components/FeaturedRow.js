import {ScrollView, View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import ArrowRightIcon from '../icons/ArrowRightIcon'
import Tw from 'twrnc';
import RestaurantCard from './RestaurantCard';
import 'react-native-url-polyfill/auto';
import Client from '../Client';

const FeaturedRow = ({ title , description ,id}) => {

  const [restaurants,setRestaurants] = useState([]);


  useEffect(()=>{console.log(id);
    Client.fetch( 
      `*[_type == 'featured' && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }   
        },
      }[0]`,{id})
      .then((data)=>{
        setRestaurants(data?.restaurants);
        
      })
      .catch((error)=>{
          console.log('Error:',error);
      });
  }, []);


  return (
    <View>
      <View style={Tw` flex-row mt-4 items-center justify-between px-4 `}>
        <Text style={Tw`font-bold text-lg`}>
            {title}
        </Text>
        <ArrowRightIcon size={26} color={"#00CCBB"} ></ArrowRightIcon>
      </View>

      <Text style={Tw` text-gray-500 px-4 text-xs `}>
        {description}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,  
        }}
        style={Tw`pt-4`}
      >
        {/* Restaurant Cards */}
        {console.log("this is restauratns : ")}
        {console.log(restaurants)}
          
        {restaurants?.map(restaurant=>(
          <RestaurantCard
            id={restaurant._id}
            key={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name} 
            rating={restaurant.rating}  genre={restaurant.type?.name}  address={restaurant.address} 
            short_description={restaurant.short_description}  dishes={restaurant.dishes}  long={restaurant.long}  lat={restaurant.lat}
          ></RestaurantCard>
        ))}
        
        
      </ScrollView>
    </View>
  )
}

export default FeaturedRow