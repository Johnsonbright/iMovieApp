import { View, Text, StatusBar, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"
import { styles } from '../../theme';
import TrendingMovies from "../TrendingMovies"



const ios = Platform.OS == 'ios';

const HomeScreen = () => {
const [trending, setTrending] = useState([1,2,3])

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
     <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:10}}>
       {/* Trending movies carousel */}
     <TrendingMovies data={trending}/>
     </ScrollView>
    
    </View>
     
    
  )
}

export default HomeScreen