import { View, Text, Dimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native'

let {width, height} = Dimensions.get('window')

const SearchScreen = () => {
  const navigation= useNavigation();
  const [results, setResults] = useState([1,2,3,4]);
  let movieName = 'Ant-man and the wasp Quantumania';
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
       <View className='mx-4 mt-1 flex-row justify-between items-center border border-neutral-200 rounded-full'>
          <TextInput
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
                     onPress={()=> navigation.push('Movie', {item})}
                  >
                    <View className="space-y-2 mb-4">
                    <Image
                    className='rounded-3xl'
                     source={require('../assets/images/AntMan.jpeg')}
                     style={{width: width*0.44, height: height*0.3}}
                    />
                    <Text className="text-neutral-300 ml-1"> {
                    movieName.length > 22 ? movieName.slice(0,22) + '...': movieName
                    }</Text>
                    </View>
                    
                  </TouchableWithoutFeedback>

                  
                )
              })
             }
           </View>
         </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen