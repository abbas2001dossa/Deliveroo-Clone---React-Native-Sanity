import { TouchableOpacity,View,Image, Text } from 'react-native'
import { useState ,react, useEffect, useMemo}  from 'react';
import Tw from 'twrnc';
import imageUrlBuilder from '@sanity/image-url'
import Client from '../Client';
import PlusCircleIcon from '../icons/PlusCircleIcon';
import MinusCircleIcon from '../icons/MinusCircleIcon';
import { useDispatch,useSelector } from 'react-redux';
import { addToBasket, selectBasketItemsWithId , removeFromBasket } from '../features/basketSlice';

const DishRow = ({id,name,short_description,image,price}) => {
    
    const [IsPressed,SetIsPressed]=useState(false);

    const builder = imageUrlBuilder(Client);
    function urlFor(source) {
        return builder.image(source);
    }
    
    const items =useSelector((state)=>selectBasketItemsWithId(state,id));
    
    
    
    const dispatch = useDispatch();
    const addItemToBasket=()=>{
            dispatch(addToBasket({id,name,short_description,image,price}));
        }
    
    const removeItemFromBasket =()=>{
        dispatch(removeFromBasket({id}));
    }
    
  
    return (
    <>
    <TouchableOpacity onPress={()=> SetIsPressed(!IsPressed)} style={Tw`border p-4 bg-white border-gray-200`}>
        <View style={Tw`flex-row`}>
            <View style={Tw`flex-1 pr-2`}>
                <Text style={Tw`text-lg text-green-900 font-bold mb-1`}> {name}</Text>
                <Text style={Tw`text-gray-400`}> {short_description}</Text>
                <Text style={Tw`text-green-900 mt-2 font-bold`}> PKR {price} </Text>
            </View>
            <View>
                <Image
                    source={{ uri:urlFor(image).url(),}}
                    style={Tw`h-20 w-20 bg-gray-300 p-4 border`}
                ></Image>
            </View>
            
        </View>
    </TouchableOpacity>

    {IsPressed &&(
        <View style={Tw`bg-white px-4 `} >
            <View style={Tw`flex-row items-center pb-3`}>
                <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length} >
                    <MinusCircleIcon size={40} color={items.length >0 ? "#00CCBB" : "gray"}
                    ></MinusCircleIcon>
                </TouchableOpacity>

                <Text> {items.length} </Text>

                <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon size={40} color={"#00CCBB"}></PlusCircleIcon>
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow