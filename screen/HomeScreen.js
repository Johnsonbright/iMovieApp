import { View, Text, StatusBar, Platform } from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline"



const ios = Platform.OS == 'ios';

const HomeScreen = () => {
  return (
    <View className="" >
     {/* search bar and logo */}
     <SafeAreaView className= {` bg-primary h-full ${ios? "mb-2": "mb-1"}`}>
       <StatusBar style="dark"/>
       <View className="flex-row justify-between item-center mx-4 " >
        <Bars3CenterLeftIcon size="30" color="white"/>
        <Text className="text-white text-3xl font-bold flex-1 ">Movie</Text>
     
       
       </View>
     </SafeAreaView>
    </View>
     
    
  )
}

export default HomeScreen