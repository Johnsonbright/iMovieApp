import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../../theme';
import {LinearGradient}  from "react-native-linear-gradient";
import Cast from '../Cast';
import MovieList from '../MovieList';

let{width, height} = Dimensions.get("window")
const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-3'

export default function MovieScreen() {
  const {params: item} = useRoute();
  const [isFavourite, toggleFavourite] = useState(false)
  const navigation = useNavigation();
  const [cast, setCast] = useState([1,2,3,4])
  const [similarMovies, setSimilarMovies] = useState([1,2,3,4])

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
     
     {/* <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(23, 23, 23, 0.5)', 'rgba(23, 23, 23, 1)']}
        style={{width, height: height*0.40}}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:1}}
        className="absolute bottom-0"
        /> */}
     </View>
   </View>
   {/* movie details */}
   <View style={{marginTop: -(height*0.09)}} className="space-y-3">
     {/* title */}
     <Text className="text-white text-center text-3xl font-bold tracking-video mt-2 bg-black/50 ">{movieName}</Text>
     {/* status, release, runtime */}
     <Text className="text-neutral-400 font-semibold text-base text-center" >
      Released - 2020 - 170 min
     </Text>
     {/* genres */}
     <View className="flex-row justify-center mx-4 space-x-2">
       <Text className="text-neutral-400 font-semibold text-base text-center" >Action - </Text>
       <Text className="text-neutral-400 font-semibold text-base text-center" >Thrill - </Text>
       <Text className="text-neutral-400 font-semibold text-base text-center" >Comedy - </Text>
     </View>
     {/* description */}
      <Text className="text-neutral-400 mx-4 tracking-wide" > 
      Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.
      </Text>
   </View>
    {/* cast */}

    <Cast cast={cast} navigation={navigation}/>

    {/* similar movies */}
    <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
  </ScrollView>
  )
}