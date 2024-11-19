import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import Cast from '../Cast';
import MovieList from '../MovieList';
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from '../../api/moviedb';
import Loading from '../Loading';

let{width, height} = Dimensions.get("window")
const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-3'

export default function MovieScreen() {
  const {params: item} = useRoute();
  const [isFavourite, toggleFavourite] = useState(false)
  const navigation = useNavigation();
  const [cast, setCast] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState({})

  let movieName = 'Ant-man and the wasp Quantumania';
 useEffect(()=> {
  if (item && item.id) {
    // console.log('itemid', item.id);
    // console.log('item', item);
    setLoading(true);
    getMovieDetails(item?.id); 
    getMovieCredit(item?.id);
    getSimilarMovies(item?.id);
  } else {
    console.log('Can'/'t find item or id')
  }
  
 }, [item])

  const getMovieDetails = async (id) => {
    try {
      const data = await fetchMovieDetails(id)
      // console.log("🚀 ~ getMovieDetails ~ data:", data.poster_path)
      if(data) setMovie(data);
      setLoading(false)
    
    }catch(error) {
      console.log('Error', error.message)
    }
 
  }
  const getMovieCredit = async (id) => {
    try {
      const data = await fetchMovieCredits(id)
       if(data && data.cast) setCast(data.cast)
       setLoading(false)
    
    }catch(error) {
      console.log('Error', error.message)
    }
  }
  const getSimilarMovies = async (id) => {
    try {
      const data = await fetchSimilarMovies(id)
       if(data && data.results) setSimilarMovies(data.results)
       setLoading(false)
    
    }catch(error) {
      console.log('Error', error.message)
    }
  }


  return (
  <ScrollView
    contentContainerStyle={{paddingBottom:20}}
    className="flex-1 bg-neutral-900"
  >
   {/* back button and movie poster */}
   <View className="w-full" >
     <SafeAreaView className={"relative  w-full  flex-row justify-between items-center px-4 flex-1" + topMargin}> 
      <TouchableOpacity onPress={() => navigation.goBack()} color={{backgroundColor: "#dbd823"}} className=" p-1.5 " >
       <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
      <HeartIcon size="35" color={isFavourite? 'red' : "white"}/>
    </TouchableOpacity>
    </SafeAreaView>
    {
        loading? (
          <Loading/>
        ) : 
        <View>
      <Image 
         source={{uri: image500(movie?.poster_path)}}
         style={{width, height:height*0.55}}
       /> 
     
     {
     /* <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(23, 23, 23, 0.5)', 'rgba(23, 23, 23, 1)']}
        style={{width, height: height*0.40}}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:1}}
        className="absolute bottom-0"
        /> */}
     </View>
      }
     
   </View>
   {/* movie details */}
   <View style={{marginTop: -(height*0.09)}} className="space-y-3">
     {/* title */}
     <Text className="text-white text-center text-3xl font-bold tracking-video mt-2 bg-black/50 ">
     {
       movie?.title
     }</Text>
      
     {/* status, release, runtime */}
     {
        movie?.id? (
        <Text className="text-neutral-300 font-semibold text-base text-center" >
        {movie?.status} - {movie?.release_date.split('-')[0]} - {movie?.runtime} min
        </Text>
      ): null
     }
    
     {/* genres */}
     <View className="flex-row justify-center mx-4 space-x-2">
        {movie?.genres?.map((genre, index) => {
          let showOut = index+1 != movie.genres.length
          return (
            <Text key={index} className="text-neutral-400 font-semibold text-base text-center" > {genre?.name} {showOut? '-': ''}</Text>
          )
        })
      }
      
      
     </View>
     {/* description */}
      <Text className="text-neutral-400 mx-4 tracking-wide" > 
        {movie?.overview}
      </Text>
   </View>
    {/* cast */}

    <Cast cast={cast} navigation={navigation}/>

    {/* similar movies */}
     <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} /> 
  </ScrollView>
  )
}