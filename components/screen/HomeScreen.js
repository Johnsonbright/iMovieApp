import { View, Text, StatusBar, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"
import { styles } from '../../theme';



const ios = Platform.OS == 'ios';

const HomeScreen = () => {
  return (
    <View className=" bg-primary h-full" >
     {/* search bar and logo */}
     <SafeAreaView className= {`${ios? "mb-2": "mb-1"}`}>
       <StatusBar style="light"/>
       <View className="flex-row justify-between item-center mx-4 " >
        <Bars3CenterLeftIcon size="30" color="white"/>
        <Text className="text-white text-3xl font-bold  "><Text style={styles.text} >M</Text>ovies</Text>
         <TouchableOpacity>
          <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
         </TouchableOpacity>
       
       </View>
     </SafeAreaView>

     <ScrollView/>
    </View>
     
    
  )
}

export default HomeScreen