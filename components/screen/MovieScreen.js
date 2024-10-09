import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../../theme';
import {LinearGradient}  from "react-native-linear-gradient";

let{width, height} = Dimensions.get("window")
const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-3'

export default function MovieScreen() {
  const {params: item} = useRoute();
  const [isFavourite, toggleFavourite] = useState(false)
  const navigation = useNavigation();
  let movieName = 'Ant-man and the wasp Quantumania';
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
     <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 flex-1" + topMargin}> 
      <TouchableOpacity onPress={() => navigation.goBack()} color={{backgroundColor: "#dbd823"}} className=" p-1.5 " >
       <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
      <HeartIcon size="35" color={isFavourite? theme.text : "white"}/>
    </TouchableOpacity>
    </SafeAreaView>
     <View>
       <Image 
         source={require("../assets/images/AntMan.jpeg")}
         style={{width, height:height*0.55}}
       />
     
     <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(23, 23, 23, 0.5)', 'rgba(23, 23, 23, 1)']}
        style={{width, height: height*0.40}}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:1}}
        className="absolute bottom-0"
        />
     </View>
   </View>
   {/* movie details */}
   <View style={{marginTop: -(height*0.09)}} className="space-y-3">
     {/* title */}
     <Text className="text-white text-center text-3xl font-bold tracking-video">{movieName}</Text>
   </View>
  </ScrollView>
  )
}