import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import HomeScreen from './Screens/HomeScreen';
import RestaurantScreen from './Screens/RestaurantScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';
import CartScreen from './Screens/CartScreen';
import PreparingOrderScreen from './Screens/PreparingOrderScreen';
import DeliveryScreen from './Screens/DeliveryScreen';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Cart" component={CartScreen} 
            options={{
              presentation:'modal',headerShown:false,
            }}
          />
          <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} 
            options={{
              headerShown: false , 
              presentation: "fullScreenModal"
            }}
          />
          <Stack.Screen name='Delivery' component={DeliveryScreen} 
            options={{
              headerShown: false , 
              presentation: "fullScreenModal"
            }}
          />

        </Stack.Navigator>
      </Provider>  
    </NavigationContainer>
  );
}
