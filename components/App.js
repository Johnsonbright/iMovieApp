import { View, Text } from 'react-native'
import React from 'react'
import AppNavigation from './Navigation/appNavigation'
import HomeScreen from './screen/HomeScreen'

export default function App() {
  return (
  
   <View>
   <AppNavigation/>
   <HomeScreen/>
   </View>
  )
}