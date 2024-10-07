import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import TrendingMovies from '../TrendingMovies'
import MovieList from '../MovieList'
import MovieScreen from '../screen/MovieScreen'


const Stack = createNativeStackNavigator()

export default function appNavigation() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}} />
      {/* <Stack.Screen name="TrendingMovies" options={{headerShown:false}} component={TrendingMovies} /> */}
      <Stack.Screen name="Movie" options={{headerShown:false}} component={MovieScreen} />
    </Stack.Navigator>
</NavigationContainer>
  )
}