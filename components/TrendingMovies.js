import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel from "react-native-snap-carousel"
import { useNavigation } from '@react-navigation/native'


let {width, height} = Dimensions.get("window")
const TrendingMovies = ({data}) => {

const navigation = useNavigation(); 

const handleClick = (item) => {
   navigation.navigate('Movie', item);
}

  return (
    <View className="mb-4">
      <Text className="text-white text-xl mx-4 mb-5">TrendingMovies</Text>
      <Carousel 
       data={data}
       renderItem={({item}) => <MovieCard item={item} handleClick={()=> handleClick(item)}/>
      }
       firstItem={1}
       inactiveSlideOpacity={0.60}
       sliderWidth={width}
       itemWidth={width*0.62}
       slideStyle={{display:"flex", alignItems: "center"}}

      />
    </View>
  )
}
 
const MovieCard = ({item, handleClick}, na) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={require('../components/assets/images/IMovie.jpg')}
        style={{
          width: width*0.6,
          height: height*0.4
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  )
}

export default TrendingMovies