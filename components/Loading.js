import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

let {width, height} = Dimensions.get('window')
const Loading = () => {
  return (
    <View style={{height,width}} className="absolute flex-row justify-center items-center" >
   <Progress.CircleSnail color={['red', 'green', 'blue']} thickness={10} size={100} />

    </View>
  )
}

export default Loading