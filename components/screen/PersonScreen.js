import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
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
          <View className="flex-row justify-center">
              <Text> Hello</Text>
          </View>
      </View>
    </ScrollView>
     
  
  )
}

export default PersonScreen