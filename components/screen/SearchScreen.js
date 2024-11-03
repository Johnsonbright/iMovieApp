import { View, Text, Dimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useCallback, useState} from 'react'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native'
import Loading from '../Loading'
import {debounce} from 'lodash'
import { fallballImage, image342, searchMovies } from '../../api/moviedb'
import FastImage from 'react-native-fast-image'

let {width, height} = Dimensions.get('window')

const SearchScreen = () => {
  const navigation= useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading]  = useState(false)
  let movieName = 'Ant-man and the wasp Quantumania';
  const handleSearch = value => {
    if(value && value.length>2){
      setLoading(true);
      searchMovies({
        query: value,
        include_adult: 'false',
        language: 'en-US',
        page: '1'
      }).then(data => {
        setLoading(false);
        if(data && data.results) setResults(data.results)
      })
    }else{
      setLoading(false)
      setResults([])
    }
  }
  const handleTextDebounce = useCallback(debounce(handleSearch, 400), [])
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
       <View className='mx-4 mt-1 flex-row justify-between items-center border border-neutral-200 rounded-full'>
          <TextInput
             onChangeText={handleTextDebounce}
             placeholder='Search Movie'
             placeholderTextColor={'lightgray'}
             className="pb-1 pl-4 text-base font-semibold  text-white tracking-wide flex-1"
          />
           <TouchableOpacity
            onPress={()=> { navigation.goBack('Home')}}
            className="rounded-full p-3 m-1 bg-red-500"
           >
            <XMarkIcon size='15' color='white'/>
           </TouchableOpacity>    
       </View>
        {/* results */}
         {
            loading? (
               <Loading/>
            ):

           results.length> 0 ? (
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
            className='space-y-3'
           >
             <Text className="text-white font-semibold ml-1"> Results ({ results.length})</Text>
             <View className='flex-row justify-between flex-wrap'>
               {
                results.map((item, index) => {
                  return (
                    <TouchableWithoutFeedback
                       key={index}
                       onPress={()=> navigation.push('Movie', item)}
                    >
                      <View className="space-y-2 mb-4">
                      <Image
                      className='rounded-3xl'
                       source={{uri: image342(item.poster_path) ?? fallballImage
                        }}
                       style={{width: width*0.44, height: height*0.3}}
                      />
                      <Text className="text-neutral-300 ml-1"> {
                      item.title.length > 22 ? item.title.slice(0,22) + '...': item.title
                      }</Text>
                      </View>
                      
                    </TouchableWithoutFeedback>
  
                    
                  )
                })
               }
             </View>
           </ScrollView>
           ): (
             <View className="flex-row flex-wrap mt-20 justify-center items-center  ">
               <Image 
                source={require('../assets/images/movietime2.jpeg')}
                className=" rounded-2xl"
                style={{
                  width:200,
                  height:200
                }}
              
               />
             </View>
            
           )
         }
       
    </SafeAreaView>
  )
}

export default SearchScreen