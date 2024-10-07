import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../../theme';

let{width, height} = Dimensions.get("window")
const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-3'

export default function MovieScreen() {
  const {params: item} = useRoute();
  const [isFavourite, toggleFavourite] = useState(false)
  const navigation = useNavigation();
 useEffect(()=> {
    //  call the movie details api
 }, [item])

  return (
  <ScrollView
    contentContainerStyle={{paddingBottom:20}}
    className="flex-1 bg-neutral-900"
  >
   {/* back button and movie poster */}
   <View className="w-full" >
    <SafeAreaView className={"relative z-20 w-full  flex-row justify-between items-center px-4" + topMargin}> 
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className=" p-1.5 " >
      <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
      <HeartIcon size="35" color={isFavourite? theme.background : "white"}/>
    </TouchableOpacity>
    </SafeAreaView>
   </View>
  </ScrollView>
  )
}