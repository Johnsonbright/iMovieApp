import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import MovieList from '../MovieList';
import Loading from '../Loading';
import {  fetchPersonDetails, image342, image500 } from '../../api/moviedb';

let {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const verticalMargin = ios? " ": "my-3" 

const PersonScreen = () => {
  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([]);
  const [person, setPerson] = useState({});
  const [loading, setLoading]  = useState(false);
  useEffect(() => {
     setLoading(true)
     getPersonDetails(item.id)
     
  }, [item])

  const getPersonDetails = async (id) => {
    try {
      const data = await fetchPersonDetails(id);
      console.log("🚀 ~ getPersonDetails ~  data:",  data)
      if(data) setPerson(data)
    }catch(error) {
      console.log('Error', error.message);
    }
   
  }

  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom:20}}>
       {/* back screen */}
       <SafeAreaView className={`z-20 w-full flex-row justify-between items-center px-4 flex-1`+ verticalMargin }> 
       <TouchableOpacity onPress={() => navigation.goBack()} color={{backgroundColor: "#dbd823"}} className=" p-1.5 " >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
           <HeartIcon size="35" color={isFavourite? "red": "white"}/>
    </TouchableOpacity>
    </SafeAreaView> 
      {/* person details */}
    
          <View>
          <View className="flex-row justify-center"
            style={{
                
              // shadowColor: 'gray',
              // shadowRadius: 40,
              // shadowOffset: {width: 0, height: 5},
              // shadowOpacity: 1,
             
            }}
          >
             <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                <Image source={{uri:image342(person.profile_path)}}
                style={{height:height*0.43, width: width*0.74,}}
              />
             </View>
          </View>
          <View className="mt-6">
              <Text className="text-3xl text-white font-bold text-center">
               {person.name}
              </Text>
              <Text className="text-base text-neutral-500 text-center">
              {person.place_of_birth}
              </Text>
          </View>
           <View className="mx-3 px-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full h-[60]">
               <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                 <Text className="text-white font-semibold">
                    Gender
                 </Text>
                 <Text className="text-sm text-neutral-300">
                  {
                   (person.gender) === 1? 'Female' : 'Male'
                  }
                 </Text>
               </View>
               <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                 <Text className="text-white font-semibold">
                    Birthday
                 </Text>
                 <Text className="text-sm text-neutral-300">
                   {person.birthday}
                 </Text>
               </View>
               <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                 <Text className="text-white font-semibold">
                    Known for
                 </Text>
                 <Text className="text-sm text-neutral-300">
                   {person.known_for_department}
                 </Text>
               </View>
               <View className=" px-2 items-center">
                 <Text className="text-white font-semibold">
                    Popularity
                 </Text>
                 <Text className="text-sm text-neutral-300">
                    {person.popularity}
                 </Text>
               </View>
           </View>
            <View className="my-6 mx-4 space-y-2">
              <Text className="text-white text-lg" >Biography</Text>
              <Text className="text-neutral-400 tracking-wide" >
              {person.biography}
            </Text>
            </View>

             {/* movies */}
            <View>
               {/* <MovieList title={"Movies"} hideSeeAll={true} data={personMovies}/> */}
            </View>
          </View>
    
    </ScrollView>
     
  
  )
}

export default PersonScreen