import { ScrollView,TextInput,SafeAreaView,Image, View, Text } from 'react-native'
import React, { useLayoutEffect, useState , useEffect } from 'react'
import Tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import UserIcon from '../icons/UserIcon';
import AdjustmentIcon from '../icons/AdjustmentIcon';
import SearchIcon from '../icons/SearchIcon';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import 'react-native-url-polyfill/auto';
import Client from '../Client';

const HomeScreen = () => {

    const navigation = useNavigation();
    const [FeaturedCategories,setFeaturedCategories]=useState([]);
    

    useEffect(()=>{
      const query = `*[_type == 'featured']{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
          
        }
} 

`;
        Client
        .fetch(query)
        .then((data)=>{
            setFeaturedCategories(data);
            console.log(data);
        })
        .catch((error)=>{
            console.log('Error:',error);
        });
      }, []);

    
    

    //  when UI initailly lodas - the layout 
    //  as soon as the screen mounts do this on it 
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown : false ,
            headerTitle : " This is Home Page "
        })
        
    } , [])


  return (
    <SafeAreaView style={Tw`bg-white pt-5 mt-5`}>
    {/* <Text style={Tw`text-red-500`}>   */}

      {/* Heading  */}
      <View style={Tw `items-center flex-row pb-3 mx-4 `}>
        <Image
          style={Tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          source={{
            uri:'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',

          }}
        />

        <View style={Tw`flex-1 ml-2`}>
          <Text style={Tw` text-gray-400 text-xs font-bold`}>
             Deliver Now ! 
          </Text >
          <Text style={Tw`font-bold text-xl`}>
            Current Location
            <ChevronDownIcon size={24} color="#00CCBB" />
          </Text>
        </View>
        
        <UserIcon size={35} color={"#00CCBB"} />
      </View>


      {/*Search Box   */}
      <View style={Tw`items-center flex-row pb-2 mx-4`}>
        <View style={Tw` flex-row bg-gray-200 p-3 flex-1 `}>
          <SearchIcon size={20} color={"gray"} />
          <TextInput style={Tw`ml-1`} placeholder='Restaurants and cusines' keyboardType='default'> 
          </TextInput>

        </View>
        <AdjustmentIcon size={30} color={"#00CCBB"}/>
      </View>


      {/* Body - Scroll View  */}
      <ScrollView style={Tw`bg-gray-100`}
        contentContainerStyle={{
          paddingBottom:100,
        }}
      >
        
        {/* Categories */}
        <Categories></Categories>
        
        {/* {console.log(FeaturedCategories)} */}
        {/* featured rows  */}
        {FeaturedCategories.map(Category =>(
          <FeaturedRow key={Category._id} id={Category._id} title={Category.name} description={Category.short_description}
          ></FeaturedRow>
        ))}

        
      </ScrollView>



    {/* </Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen