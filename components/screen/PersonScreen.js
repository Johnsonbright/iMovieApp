import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

let {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const verticalMargin = ios? " ": "my-3" 

const PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false)
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
                <Image source={require('../assets/images/castImage1.webp')}
                style={{height:height*0.43, width: width*0.74,
                  
                }}
              />
             </View>
          </View>
      </View>
    </ScrollView>
     
  
  )
}

export default PersonScreen