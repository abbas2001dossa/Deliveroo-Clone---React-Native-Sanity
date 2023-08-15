import {SafeAreaView, View, Text  } from 'react-native'
import React,{useEffect} from 'react'
import Tw from 'twrnc';
import * as Animatible from "react-native-animatable";
import * as Progress from "react-native-progress";
import {useNavigation} from '@react-navigation/native';


const PreparingOrderScreen = () => {

    const navigation=useNavigation();

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Delivery");
      },4000);
    }, []);
    
  return (
    <SafeAreaView style={Tw`flex-1 bg-[#FFF8e7] justify-center items-center`}>
      <Animatible.Image
        source={require("../assets/waiting.gif")}
        animation="slideInUp"
        iterationCount={1}
        style={Tw`h-96 w-96 `}
      >
      </Animatible.Image>

      <Animatible.Text
        animation="slideInUp"
        iterationCount={1}
        style={Tw`text-black text-lg my-10 font-bold text-center`}
      >
        Waiting For Restaurant to Accept Your Order !
      </Animatible.Text>

      <Progress.Circle size={60} color='black' indeterminate={true}></Progress.Circle>

    </SafeAreaView>
  )
}

export default PreparingOrderScreen