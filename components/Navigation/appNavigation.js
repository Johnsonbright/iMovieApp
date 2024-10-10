import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import MovieScreen from '../screen/MovieScreen'
import PersonScreen from '../screen/PersonScreen'


const Stack = createNativeStackNavigator()

export default function appNavigation() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}} />
      <Stack.Screen name="Movie" options={{headerShown:false}} component={MovieScreen} />
       <Stack.Screen name="Person" options={{headerShown:false}} component={PersonScreen} />
    </Stack.Navigator>
</NavigationContainer>
  )
}