import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Cast = ({cast, navigation}) => {
  let personName = 'Keanu Reaves';
  let characterName = 'John Wick'

  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5" >Top Cast</Text>
      <ScrollView
       horizontal
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
          cast && cast.map((person, index)=> {
            return(
              <TouchableOpacity
                key={index}
                className="mr-4 items-center"
                onPress={() => navigation.navigate('Person', {person})}
              >
                <View
                 className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500"
                >
                <Image
                   className="rounded-2xl h-24 w-20"
                    source={require('../components/assets/images/castImage1.webp')}
                 />
                </View>
                
                <Text className="text-white text-xs mt-1">
                   {
                    characterName.length > 10? characterName.slice(0,10) + '...' : characterName
                   }
                </Text>
                <Text className="text-neutral-400 text-xs mt-1">
                   {
                   personName.length > 10? personName.slice(0,10) + '...' : personName
                   }
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>

    </View>
  )
}

export default Cast