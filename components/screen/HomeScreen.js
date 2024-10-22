import { View, Text, StatusBar, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"
import { styles } from '../../theme';
import TrendingMovies from "../TrendingMovies"
import MovieList from '../MovieList';
import theme  from '../../theme';
import { useNavigation } from '@react-navigation/native';
import Loading from '../Loading';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../../api/moviedb';



const ios = Platform.OS == 'ios';

const HomeScreen = () => {
const [trending, setTrending] = useState([]);
const [upcoming, setUpComing] = useState([]);
const [topRated, setTopRated] = useState([]);
const [loading, setLoading]  = useState(true)
const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies()
    getUpcomingMovies()
    getTopRatedMovies()
  }, [])

  const getTrendingMovies = async () => {
    try {
      const data = await fetchTrendingMovies();
      // console.log('get trending movies', data);
      if(data && data.results) setTrending(data.results);
      setLoading(false)
    } catch(error) {
       console.log('error', error.message)
    }
   
  }
  const getUpcomingMovies = async () => {
    try {
      const data = await fetchUpcomingMovies();
    // console.log('get upcoming movies', data);
    if(data && data.results) setUpComing(data.results);
    setLoading(false)
    } catch(error) {
      console.log('error', error.message)
    }
    
  }
  const getTopRatedMovies = async () => {
    try {
      const data = await fetchTopRatedMovies()
      // console.log('get toprated movies', data);
      if(data && data.results) setTopRated(data.results);
      setLoading(false)
    } catch(error) {
      console.log('error', error.message)
    }
  
  }
  return (
    <View className=" bg-primary h-full" >
     {/* search bar and logo */}
     <SafeAreaView className= {`${ios? "mb-2": "mb-1"}`}>
       <StatusBar style="light"/>
       <View className="flex-row justify-between item-center mx-4 " >
        <Bars3CenterLeftIcon size="30" color="white"/>
        <Text className="text-white text-3xl font-bold  "><Text style={{color: styles.text}} >iM</Text>ovies</Text>
         <TouchableOpacity
          onPress={()=> navigation.navigate('Search')}
         >
          <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
         </TouchableOpacity>
       </View>
     </SafeAreaView>

        {
          loading? (<Loading/>) : (
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:10}}>
             {/* Trending movies carousel */}
            {trending.length>0 && <TrendingMovies data={trending}/>} 
      
           {/* upcoming movies row */}
           <MovieList title="Upcoming" data={upcoming} />
      
           {/* top rated movies row */}
           <MovieList title="Top Rated" data={topRated} />
           </ScrollView>
          )
        }
    
    
    </View>
     
    
  )
}

export default HomeScreen