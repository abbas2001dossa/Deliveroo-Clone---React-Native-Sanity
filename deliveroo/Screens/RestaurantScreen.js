import {TouchableOpacity, View, Text, Image,ScrollView } from 'react-native'
import {useLayoutEffect,useEffect,React} from 'react'
import {useRoute , useNavigation} from "@react-navigation/native";
import imageUrlBuilder from '@sanity/image-url'
import Client from '../Client';
import Tw from 'twrnc';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import StarIcon from '../icons/StarIcon';
import LocationIcon from '../icons/LocationIcon';
import QuestionMarkCircleIcon from '../icons/QuestionMarkCircleIcon'; 
import ChevronRightIcon from '../icons/ChevronRightIcon';
import DishRow from '../components/DishRow';
import Cart from '../components/Cart';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {

  const dispatch = useDispatch();  
  const navigation =useNavigation();  
  const {params:{id , imgUrl , title , rating , genre , address, short_description , dishes , long , lat }} = useRoute();
  const builder = imageUrlBuilder(Client);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    dispatch(setRestaurant({id , imgUrl , title , rating , genre , address, short_description , dishes , long , lat}));
  }, [dispatch]);
  

  useLayoutEffect(() => {
    console.log("This is Dishes : ");
    console.log(dishes);
    navigation.setOptions({
        headerShown : false ,
    });
  }, []);

  return (
    <>
    <Cart></Cart>
    <ScrollView>
        <View>
            <Image
                source={{ uri:urlFor(imgUrl).url(),  }}
                style={Tw`w-full h-56 bg-gray-300 p-4`}
            ></Image>
            <TouchableOpacity onPress={navigation.goBack} style={Tw` absolute top-14 left-5 p-2 bg-gray-100 rounded-full `}>
                <ArrowLeftIcon size={21} color="#00CCBB"></ArrowLeftIcon>
            </TouchableOpacity>
        </View>

        <View style={Tw`bg-white`}>
            <View style={Tw`px-4 pt-4 `}>
                <Text style={Tw`font-bold text-3xl `} >{title}</Text>
                <View style={Tw`flex-row my-1`}>
                    <View style={Tw`flex-row items-center`}>
                        <StarIcon color="green" opacity={0.5} size={22} ></StarIcon>
                        <Text style={Tw`text-xs text-gray-500 ml-1`}>
                            <Text style={Tw`text-green-500`}>{rating} </Text> .  {genre}
                        </Text>
                    </View>

                    <View style={Tw`flex-row items-center ml-5`}>
                        <LocationIcon color="gray" opacity={2.5} size={22} ></LocationIcon>
                        <Text style={Tw`text-xs text-gray-500 ml-1`}>
                            Nearby . {address}
                        </Text>
                    </View>
                </View>
                <Text style={Tw`text-gray-500 mt-2 pb-4`}> {short_description}</Text>
            </View>

            <TouchableOpacity style={Tw`flex-row items-center p-4 border-gray-300 border`}>
                <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}></QuestionMarkCircleIcon>
                <Text style={Tw`pl-2 flex-1 font-bold text-sm`}>
                    Have a food Allergy ? 
                </Text>
                <ChevronRightIcon size={24} color="#00CCBB"></ChevronRightIcon>
            </TouchableOpacity>
        </View>


        {/* menu etc */}
        <View style={Tw`pb-36`}>
            <Text style={Tw`px-4 pt-6 mb-3 font-bold text-xl`}>
                Menu
            </Text>

            {/* dish rows - needs mapping over something */}
            {dishes.map(dish=>(
                <DishRow  key={dish._id} id={dish._id} name={dish.name} short_description={dish.short_description}
                    price={dish.price} image={dish.image}
                >
                </DishRow>
            ))}

        </View>

    </ScrollView>
    </>
  )
}

export default RestaurantScreen